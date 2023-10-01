import { Link as ReactRouterLink } from 'react-router-dom'
import { styled } from 'styled-components'
import { css } from 'styled-components'


const buttonStyles = css`
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
        height: 100%;
        fill: #FFF;
        width: auto;
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

const buttonLightStyles = css`
    background-color: var(--accent-color-1);

    &:hover {
        color: #FFF;
        background-color: var(--accent-color-1-darker);

        svg {
            fill: #FFF;
        }
    }
`

const buttonDarkStyles = css`
    background-color: var(--primary-color);

    &:hover {
        color: #FFF;
        background-color: var(--primary-color-darker);

        svg {
            fill: #FFF;
        }
    }
`

export const Transparent = styled.button`
    ${ buttonStyles }
`

export const Light = styled(Transparent)`
    ${ buttonLightStyles }
`

export const Dark = styled(Transparent)`
    ${ buttonDarkStyles }
`

export const Link = styled(ReactRouterLink)`
    ${ buttonStyles }
    text-decoration: none;
`

export const LinkPrimary = styled(Link)`
    ${ buttonLightStyles }
`

