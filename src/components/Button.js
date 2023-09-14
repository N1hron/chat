import { styled } from 'styled-components'

const StyledButton = styled.button`
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

    transition: color 0.15s;

    &:hover {
        color: ${({ theme }) => theme.colors['accent-1']};

        svg {
            fill: ${({ theme }) => theme.colors['accent-1']};
        }
    }
`

export default function Button({ children }) {
    return (
        <StyledButton>
            { children }
        </StyledButton>
    )
}