import { styled } from 'styled-components'
import { NavLink } from 'react-router-dom'


export const NavigationLink = styled(NavLink)`
    font-size: 1.75rem;
    gap: 0.5rem;
    border-radius: 10px;

    &.active {
        color: var(--accent-color-1);

        svg {
            fill: var(--accent-color-1);
        }
    }

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
`

export const Sidebar = styled.aside`
    min-height: 100%;
    background-color: ${({ theme }) => theme.colors['primary']};
    max-width: 300px;
    flex-grow: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    color: white;
    position: relative;
    z-index: 2;

    svg {
        fill: #FFF;
        height: auto;
    }

    nav {
        flex-grow: 1;
    }

    a {
        text-decoration: none;
        color: #FFF;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const Navigation = styled.nav`
    ul {
        padding: 20px;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        width: 100%;
    }
`