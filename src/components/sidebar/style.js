import { styled } from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { Button } from '../styled/Button'


export const LogoLink = styled(Link)`
    width: 100%;
    min-height: 80px;

    &>div {
        display: flex;
        justify-content: center;

        svg {
            flex-shrink: 0;
        }
    }
`

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
`

export const Sidebar = styled.aside`
    background-color: ${({ theme }) => theme.colors['primary']};
    width: ${ props => props.$isExpanded ? '300px' : '80px'};
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    color: white;
    z-index: 2;
    position: fixed;
    overflow-y: scroll;
    overflow-x: hidden;
    height: 100vh;
    left: 0;
    top: 0;
    direction: rtl;

    &::-webkit-scrollbar {
        display: none;
    }

    * {
        direction: ltr;
    }

    a {
        text-decoration: none;
    }

    nav {
        flex-grow: 1;
    }

    button, a {
        span {
            flex-shrink: 0;
        }
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

export const ExpandButton = styled(Button.Light) `
    position: relative;
    align-self: flex-start;
    right: -20px;
    padding: 0.25rem 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    
    svg {
        transform: rotateY(${ props => props.$isExpanded ?  '180deg' : 0});
    }
`