import { styled } from 'styled-components'
import { motion } from 'framer-motion'


export const StatusMessage = styled(motion.div)`
    background-color: #FFFFFFB6;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    color: var(--accent-color-1);
    backdrop-filter: blur(10px);
    font-size: 1.5rem;
    text-align: center;
    font-weight: 500;

    svg {
        width: 100px;
        height: auto;
        fill: var(--accent-color-1)
    }
`

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`