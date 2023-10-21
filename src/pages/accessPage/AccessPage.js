import { ButtonLink } from '../../components/styled/Button'
import * as S from './style'
import Logo from '../../components/logo/Logo'
import { modalAppearVariants as variants } from '../../animations/variants'


export default function AccessPage() {
    return (
        <S.AccessModal>
            <S.LogoContainer>
                <Logo/>
            </S.LogoContainer>

            <ButtonLink to='/unauthorized/login'>Log in</ButtonLink>
            <ButtonLink.Primary to='/unauthorized/signup'>Sign up</ButtonLink.Primary>
        </S.AccessModal>
    )
}

