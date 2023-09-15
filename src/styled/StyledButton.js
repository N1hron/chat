import { styled } from 'styled-components'

export const StyledButton = styled.button`
    padding: 0.5rem 0.75rem;
    /* width: max-content; */
    border-radius: .75rem;
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
        color: ${({ theme }) => theme.colors['accent-1']};

        svg {
            fill: ${({ theme }) => theme.colors['accent-1']};
        }
    }
`

export const StyledButtonPrimary = styled(StyledButton)`
    background-color: ${({ theme }) => theme.colors['accent-1']};

    &:hover {
        color: #FFF;
        background-color: ${({ theme }) => theme.colors['accent-1-darker']};
    }
`