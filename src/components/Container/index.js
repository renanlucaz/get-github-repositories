import styled from 'styled-components';

const Container = styled.div`
    max-width: 700px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    padding: 30px;
    margin: 80px auto;

    @media (max-width: 730px) {
        & {
            margin: 20px;
        }
    }

    h1 {
        font-size: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;

        svg {
            margin-right: 10px;
        }
    }
`;

export default Container;
