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
            color: ${({ theme }) => theme.colors['accent-1']};
    
            svg {
                fill: ${({ theme }) => theme.colors['accent-1']};
            }
        }
    }
`