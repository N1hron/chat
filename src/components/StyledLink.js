import { styled } from 'styled-components'
import { Link } from 'react-router-dom'


export const StyledLink = styled(Link)`
    font-size: 1.75rem;
    gap: 0.5rem;

    svg {
        transition: fill 0.15s;
        width: 2.25rem;
    }

    transition: color 0.15s;

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