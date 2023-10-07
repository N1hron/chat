import { styled } from 'styled-components'
import { motion } from 'framer-motion'
import * as Button from '../styled/Button'


export const Confirm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 20px;
    height: 100%;

    img {
        position: static !important;
        transform: none !important;
        min-height: auto !important;
        max-height: 275px !important;
        flex-grow: 1;
    }
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
    min-height: 500px;
    max-width: 700px;
    width: 100%;
`

export const Step = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`

export const View = styled.div`
    padding: 20px;
    position: relative;
    background-color: #FFFFFFB6;
    border-radius: 10px;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    .reactEasyCrop_Container {
        border-radius: inherit;
    }

    .reactEasyCrop_Container {
        position: relative;
        height: 100%;
        flex-grow: 1;
    }

    img:not(.reactEasyCrop_Image) {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        object-fit: contain;
        min-height: 300px;
        max-height: 90%;
        max-width: 90%;
    }
`

export const ImageDropArea = styled.div`
    input {
        display: none;
    }

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