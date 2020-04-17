import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form.attrs((props) => ({
    disabled: props.error,
}))`
    margin-top: 30px;
    display: flex;
    flex-direction: row;

    input {
        flex: 1;
        border: 1px solid #eee;
        padding: 10px 15px;
        border-radius: 4px;
        font-size: 16px;
    }

    p {
        display: none;
    }

    &[disabled] {
        input {
            border: 1px solid red;
        }
    }

    @media (max-width: 390px) {
        flex-direction: column;

        button {
            height: 40px;
            margin-left: 0px;
            margin-top: 10px;
        }
    }
`;

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

export const SubmitButton = styled.button.attrs((props) => ({
    type: 'submit',
    disabled: props.loading,
}))`
    background: #151515;
    border: 0;
    padding: 0 15px;
    margin-left: 10px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;

    &[disabled] {
        cursor: not-allowed;
        opacity: 0.6;
    }

    &:hover {
        background: #3c3c3c;
    }

    ${(props) =>
        props.loading &&
        css`
            svg {
                animation: ${rotate} 2s linear infinite;
            }
        `}
`;

export const List = styled.ul`
    list-style: none;
    margin-top: 30px;

    li {
        padding: 15px 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        & + li {
            border-top: 1px solid #eee;
        }

        a {
            color: #151515;
            text-decoration: none;
            transition: 0.2s;
        }

        div {
            display: flex;
            align-items: center;
        }

        svg {
            color: #dc3545;
            margin-left: 10px;
            cursor: pointer;
            transition: 0.2s;
        }

        svg:hover,
        a:hover {
            transform: translateY(-2px);
        }
    }
`;
