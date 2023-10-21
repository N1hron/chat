import { styled } from 'styled-components'
import { Link } from 'react-router-dom'


export const Sidebar = styled.aside`
    background-color: ${({ theme }) => theme.colors['primary']};
    flex-basis: ${ props => props.$isExpanded ? '275px' : '80px'};
    flex-shrink: 0;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    z-index: 2;
    overflow-y: scroll;
    overflow-x: hidden;
    height: 100%;
    direction: rtl;

    &::-webkit-scrollbar {
        display: none;
    }

    * {
        direction: ltr;
    }

    nav {
        flex-grow: 1;
    }
`

export const LogoLink = styled(Link)`
    width: 100%;
    min-height: 80px;
    text-decoration: none;
`

export const Navigation = styled.nav`
    ul {
        padding: 1rem 1rem 0;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        width: 100%;
    }
`

export const ExpandButtonContainer = styled.div`
    position: relative;
    flex-grow: 1;
    width: 100%;
    min-height: 2.6rem;
    
    button {
        position: absolute;
        right: -20px;
        padding: 0.25rem 0;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;

        svg {
            transform: rotateY(${ props => props.$isExpanded ?  '180deg' : 0});
        }
    }
`