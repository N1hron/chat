import styled from 'styled-components'
import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

import { ReactComponent as SpinnerIcon } from '../assets/icons/spinner.svg'
import { ReactComponent as SuccessIcon } from '../assets/icons/done.svg'
import { ReactComponent as ErrorIcon } from '../assets/icons/error.svg'
import { appearVariants as variants } from '../animations/variants'


const icons = {
    'loading': <SpinnerIcon/>,
    'success': <SuccessIcon/>,
    'error': <ErrorIcon/>
}

export default function StatusMessage({ children, type }) {
    const messageRef = useRef()

    useEffect(() => {
        const height = getComputedStyle(messageRef.current).height
        messageRef.current.style.minWidth = height
    }, [])

    return (
        <Wrapper>
            <Container
                variants={ variants } 
                initial='hidden'
                animate='visible'
                exit='hidden'
                transition={{ delay: 0.1, duration: 0.1 }}
                ref={ messageRef }
            >
                { type && icons[type] }
                { children }
            </Container>
        </Wrapper>
    )
}

const Container = styled(motion.div)`
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

const Wrapper = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`