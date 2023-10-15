import { Button, ButtonLink } from '../../components/styled/Button'
import * as S from './style'
import Logo from '../../components/logo/Logo'
import { modalAppearVariants as variants } from '../../animations/variants'


export default function AccessPage() {
    return (
        <S.AccessPage
            variants={ variants }
            initial='hidden'
            animate='visible'
            transition={{ delay: 0.1, duration: 0.2 }}
        >
            <S.LogoContainer>
                <Logo/>
            </S.LogoContainer>

            <ButtonLink to='/unauthorized/login'>Log in</ButtonLink>
            <ButtonLink.Primary to='/unauthorized/signup'>Sign up</ButtonLink.Primary>
        </S.AccessPage>
    )
}

