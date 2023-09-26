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

const buttonPrimaryStyles = css`
    background-color: var(--accent-color-1);

    &:hover {
        color: #FFF;
        background-color: var(--accent-color-1-darker);

        svg {
            fill: #FFF;
        }
    }
`

const StyledButton = styled.button`
    ${ buttonStyles }
`

export const Primary = styled(StyledButton)`
    ${ buttonPrimaryStyles }
`

export const Link = styled(ReactRouterLink)`
    ${ buttonStyles }
    text-decoration: none;
`

export const LinkPrimary = styled(Link)`
    ${ buttonPrimaryStyles }
`

export default StyledButton

