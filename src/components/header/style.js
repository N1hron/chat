import { styled } from 'styled-components'
import Block from '../styled/Block'


export const Content = styled(Block)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    position: relative;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    overflow: hidden;
`

export const Header = styled.header`
    padding: 0px 15px 0;
    /* width: 100%; */
    
    h2 {
        background-color: var(--primary-color);
        padding: 1rem 2rem;
        font-size: 2.5rem;
        color: #FFF;
    }
`

export const ProfilePicture = styled.div`
    /* position: absolute; */
    height: 4.875rem;
    background-color: var(--primary-color);
    width: auto;
    aspect-ratio: 1;
    padding: 5px;
    right: 0;
    top: 0;
    cursor: pointer;

    svg {
        fill: #FFF;
        width: 100%;
        height: 100%;
        transition: all .25s;
    }

    &:hover {
        svg {
            fill: var(--accent-color-1);
        }
    }

    &:active {
        svg {
            fill: var(--accent-color-1-darker);
        }
    }
`