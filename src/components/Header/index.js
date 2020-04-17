import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import PageHeader from './styles';

export default function Header() {
    return (
        <PageHeader>
            <h1>Get github repositories</h1>
            <div>
                <a
                    href="https://github.com/renanlucaz"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <FaGithub size={30} color="#fff" />
                </a>
                <a
                    href="https://www.linkedin.com/in/renan-nascimento-16a5811a0/"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <FaLinkedin size={30} color="#fff" />
                </a>
            </div>
        </PageHeader>
    );
}
