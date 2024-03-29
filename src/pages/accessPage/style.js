import { styled } from 'styled-components'
import { motion } from 'framer-motion'


export const AccessModal = styled(motion.div)`
    background-color: var(--primary-color);
    padding: 20px;
    border-radius: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, max-content);
    column-gap: 20px;
    row-gap: 30px;
    justify-content: center;
    margin: auto;
`

export const LogoContainer = styled.div`
    grid-column: 1/3;
`