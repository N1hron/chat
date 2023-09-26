import { styled } from 'styled-components'


export const Message = styled.p`
    color: var(--accent-color-1);
    margin-top: 0.5rem;
`

export const Input = styled.input`
    border: none;
    box-shadow: inset 0px 0px 2px 0px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    width: 100%;
    height: 30px;
    padding: 0.5rem;
    outline: none;
    font: small-caption;
    font-size: 1rem;
    color: var(--accent-color-2);
    display: flex;
    align-items: center;
`

export const Field = styled.div`
    max-width: 250px;
    width: 100%;

    label {
        font-size: 1.2rem;
        display: inline-block;
        margin-bottom: 0.5rem;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    a {
        color: var(--accent-color-1);
    }
    &>p:nth-last-of-type(1) {
        margin-top: 1rem;
    }

    button {
        margin-top: 1rem;
    }

    legend {
        align-self: center;
        font-size: 2rem;
    }
`