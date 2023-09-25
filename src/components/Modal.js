import styled from 'styled-components'
import { motion } from 'framer-motion'

import { modalAppearVariants as variants } from '../animations/variants'


export default function Modal({ children, icon }) {
    return (
        <Wrapper 
            variants={ variants }
            initial='hidden'
            animate='visible'
            $hasIcon={ !!icon }
        >
            { icon && <IconContainer>{ icon }</IconContainer> }
            { children }
        </Wrapper>
    )
}

const Wrapper = styled(motion.div)`
    position: relative;
    background-color: #FFFFFFB6;
    border-radius: 10px;
    padding: ${props => props.$hasIcon ? '60px 20px 20px' : '20px'};
    margin-top: ${props => props.$hasIcon ? '30px' : 0};
    color: var(--accent-color-2);
`

const IconContainer = styled.div`
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--accent-color-1);
    width: 80px;
    height: 80px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 10px solid var(--secondary-color-3);
    padding: 10px;

    svg {
        fill: #FFF;
        width: 100%;
        height: auto;
    }
`