import { styled } from 'styled-components'


const Text = styled.p`
    background-color: var(--primary-color);
    padding: 1rem;
    border-radius: 10px;
    font-size: 1.75rem;
    font-weight: 500;
    color: #FFF;

    span.highlight {
        border-radius: 0.3125em;
        padding: 0.25rem;
        background-color: var(--accent-color-1);
    }
`

export default Text