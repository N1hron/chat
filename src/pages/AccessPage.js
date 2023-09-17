import { styled } from 'styled-components'

import Logo from '../components/Logo'
import { Button, ButtonPrimary } from '../components/Button'

export default function AccessPage() {
    return (
        <Wrapper>
            <LogoContainer>
                <Logo/>
            </LogoContainer>
            <Button>Log in</Button>
            <ButtonPrimary>Sign up</ButtonPrimary>
        </Wrapper>
    )
}

const Wrapper = styled.div`
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