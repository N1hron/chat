import { styled } from 'styled-components'
import { motion } from 'framer-motion'
import * as Button from '../styled/Button'


export const GoBackButton = styled(Button.Primary)`
    position: absolute;
    top: 0;
    left: -20px;
    transform: translateX(-100%);
`

export const Content = styled(motion.div)`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-height: 375px;
    max-height: 500px;
    max-width: 700px;
    width: 100%;
`

export const Cropper = styled.div`
    padding: 10px;
    background-color: #FFFFFFB6;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;

    img {
        object-fit: contain;
        max-width: 100%;
        max-height: 500px;
    }
`

export const FileInput = styled.div`
    input {
        display: none;
    }

    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    cursor: pointer;

    p {
        color: #FFF;
        border-radius: 0.3125em;
        padding: 0.75rem;
        background-color: var(--primary-color);
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        svg {
            fill: #FFF;
            height: 50px;
            width: auto;
        }
    }
`