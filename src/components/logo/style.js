import { styled } from 'styled-components'


export const Logo = styled.div`
    display: flex;
    align-items: center;
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
        width: 5rem;
        fill: #FFF;
        height: auto;
    }
`