import styled from 'styled-components';

const PageHeader = styled.header`
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-around;
    background: #151515;
    padding: 15px;

    h1 {
        color: white;
        font-size: 25px;
    }

    svg {
        margin-left: 10px;
        transition: 0.2s;
    }

    svg:hover {
        transform: translateY(-3px);
    }

    @media (max-width: 420px) {
        flex-direction: column;
        align-items: center;

        svg {
            margin-top: 10px;
        }
    }
`;

export default PageHeader;
