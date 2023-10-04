import { styled } from 'styled-components'
import { motion } from 'framer-motion'
import * as Button from '../styled/Button'


export const Confirm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`

export const Buttons = styled.div`
    display: flex;
    gap: 1rem;

    button {
        flex-grow: 1;
        flex-basis: 100%;
    }
`

export const GoBackButton = styled(Button.Light)`
    position: absolute;
    top: 0;
    left: -20px;
    transform: translateX(-100%);
`

export const Wrapper = styled(motion.div)`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-height: 400px;
    max-width: 700px;
    width: 100%;
`

export const Content = styled.div`
    padding: 20px;
    position: relative;
    background-color: #FFFFFFB6;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;

    img {
        height: 300px;
        width: 300px;
    }

    .reactEasyCrop_Container {
        top: 20px;
        left: 20px;
        right: 20px;
        bottom: 20px;

        img {
            width: auto;
            height: auto;
        }
    }
`

export const ImageDropArea = styled.div`
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