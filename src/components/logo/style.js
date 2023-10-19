import { styled } from 'styled-components'


export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    user-select: none;
    color: #FFF;

    span {
        color: var(--accent-color-1);
    }

    h1 {
        font-weight: 700;
        font-size: 3rem;
        display: block;
    }

    svg {
        display: block;
        max-width: 5rem;
        flex-shrink: 0;
        width: 100%;
        fill: #FFF;
        height: auto;
    }
`