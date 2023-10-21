import { styled } from 'styled-components'
import { motion } from 'framer-motion'


export const Overlay = styled.div`
    position: fixed;
    background-color: rgba(0, 0, 0, .8);
    backdrop-filter: blur(5px);
    width: 100%;
    height: 100dvh;
    left: 0;
    top: 0;
    z-index: 3;
    display: flex;
    overflow: auto;
    padding: 1.5rem;
`

export const Container = styled.div`
    margin: auto;
`