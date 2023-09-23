import { styled } from 'styled-components'
import { motion } from 'framer-motion'

import Logo from '../components/Logo'
import { LinkButton, LinkButtonPrimary } from '../components/buttons'
import { appearVariants as variants } from '../animations/variants'


export default function AccessPage() {
    return (
        <Wrapper
            variants={ variants }
            initial='hidden'
            animate='visible'
            transition={{ delay: 0.1, duration: 0.2 }}
        >
            <LogoContainer>
                <Logo/>
            </LogoContainer>

            <LinkButton to='/unauthorized/login'>Log in</LinkButton>
            <LinkButtonPrimary to='/unauthorized/signup'>Sign up</LinkButtonPrimary>
        </Wrapper>
    )
}

const Wrapper = styled(motion.div)`
    background-color: var(--primary-color);
    padding: 20px;
    border-radius: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, max-content);
    column-gap: 20px;
    row-gap: 30px;
    justify-content: center;
`

const LogoContainer = styled.div`
    grid-column: 1/3;
    justify-self: center;
`