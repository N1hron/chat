import { styled } from 'styled-components'
import { NavLink } from 'react-router-dom'


export const NavigationLink = styled(NavLink)`
    font-size: 1.75rem;
    gap: 0.5rem;
    border-radius: 10px;
    width: max-content;
    color: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto; 

    &.active {
        color: var(--accent-color-1);

        svg {
            fill: var(--accent-color-1);
        }

        &:hover {
            scale: initial;
        }
    }

    svg {
        fill: #FFF;
        height: 100%;
        transition: fill 0.15s;
        width: 2.25rem;
    }

    transition: all 0.15s;

    &:hover {
        scale: 1.05;

        color: var(--accent-color-1);

        svg {
            fill: var(--accent-color-1);
        }
    }
`

export const Sidebar = styled.aside`
    background-color: ${({ theme }) => theme.colors['primary']};
    width: 300px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    color: white;
    position: relative;
    z-index: 2;
    position: fixed;
    overflow-y: scroll;
    height: 100vh;
    left: 0;
    top: 0;

    a {
        text-decoration: none;
    }

    nav {
        flex-grow: 1;
    }

    button {
        align-self: stretch;
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