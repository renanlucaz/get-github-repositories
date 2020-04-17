import React, { Component } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Container from '../../components/Container';
import Header from '../../components/Header';
import { Form, SubmitButton, List } from './styles';

export default class Main extends Component {
    // eslint-disable-next-line react/state-in-constructor
    state = {
        newRepo: '',
        repositories: [],
        loading: null,
        error: false,
    };

    // Carregar os dados do localstorage
    componentDidMount() {
        const repositories = localStorage.getItem('repositories');

        if (repositories) {
            this.setState({ repositories: JSON.parse(repositories) });
        }
    }

    // Salvar os dados do localstorage
    componentDidUpdate(_, prevState) {
        const { repositories } = this.state;

        if (prevState.repositories !== repositories) {
            localStorage.setItem('repositories', JSON.stringify(repositories));
        }
    }

    handleInputChange = (e) => {
        this.setState({ newRepo: e.target.value, error: null });
    };

    handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { newRepo, repositories } = this.state;

            if (newRepo === '') {
                throw 'Precisa inserir um repositório'();
            }

            const repoExists = repositories.find(
                (repo) => repo.name === newRepo
            );

            if (repoExists) throw 'Repositório duplicado'();

            this.setState({ loading: true });

            const response = await api.get(`repos/${newRepo}`);

            const data = {
                name: response.data.full_name,
            };

            this.setState({
                repositories: [...repositories, data],
                newRepo: '',
                loading: false,
                error: false,
            });
        } catch (err) {
            this.setState({
                loading: false,
                error: true,
            });
        }
    };

    handleDelete = (repo) => {
        const { repositories } = this.state;

        this.setState({
            repositories: repositories.filter((r) => r !== repo),
        });
    };

    render() {
        const { newRepo, loading, repositories, error } = this.state;

        return (
            <>
                <Header />
                <Container>
                    <h1>
                        <FaGithubAlt />
                        Repositórios
                    </h1>

                    <Form onSubmit={this.handleSubmit} error={error}>
                        <input
                            type="text"
                            placeholder="Adicionar repositório"
                            value={newRepo}
                            onChange={this.handleInputChange}
                        />

                        <SubmitButton loading={loading}>
                            {loading ? (
                                <FaSpinner color="#fff" size={14} />
                            ) : (
                                <FaPlus color="#fff" size={14} />
                            )}
                        </SubmitButton>
                    </Form>

                    <List>
                        {repositories.map((repo) => (
                            <li key={repo.name}>
                                <span>{repo.name}</span>
                                <div>
                                    <Link
                                        to={`/repository/${encodeURIComponent(
                                            repo.name
                                        )}`}
                                    >
                                        Detalhes
                                    </Link>
                                    <FaTrashAlt
                                        onClick={() => this.handleDelete(repo)}
                                    />
                                </div>
                            </li>
                        ))}
                    </List>
                </Container>
            </>
        );
    }
}
