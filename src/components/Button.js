import { styled } from 'styled-components'

export const Button = styled.button`
    padding: 0.5rem 0.75rem;
    border-radius: 0.75rem;
    background: none;
    border: none;
    color: #FFF;
    font-size: 1.8rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    svg {
        width: 3rem;
        transition: fill 0.15s;
    }

    transition: all 0.15s;

    &:hover {
        color: var(--accent-color-1);

        svg {
            fill: var(--accent-color-1);
        }
    }

    &:active {
        color: var(--accent-color-1-darker);

        svg {
            fill: var(--accent-color-1-darker);
        }
    }
`

export const ButtonPrimary = styled(Button)`
    background-color: var(--accent-color-1);

    &:hover {
        color: #FFF;
        background-color: var(--accent-color-1-darker);
    }
`