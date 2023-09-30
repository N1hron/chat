import { styled } from 'styled-components'
import { motion } from 'framer-motion'


export const Overlay = styled(motion.div)`
    position: fixed;
    background-color: rgba(0, 0, 0, .8);
    backdrop-filter: blur(5px);
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
`