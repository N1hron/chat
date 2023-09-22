import styled from 'styled-components'

import { ReactComponent as SpinnerIcon } from '../assets/icons/spinner.svg'

export default function StatusMessage({ children, type }) {
    return (
        <Wrapper>
            <Container>
                { setIcon(type) }
                { children }
            </Container>
        </Wrapper>
    )
}

function setIcon(type) {
    switch (type) {
        case 'loading':
            return <SpinnerIcon/>
        default: 
            return null
    }
}

const Container = styled.div`
    background-color: #FFFFFFB6;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    color: var(--accent-color-2);
    backdrop-filter: blur(10px);
    font-size: 1.5rem;
    width: 200px;
    aspect-ratio: 1;

    svg {
        width: 80%;
        height: max-content;
        fill: var(--accent-color-1)
    }
`

const Wrapper = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`