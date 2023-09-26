import * as Button from '../../components/styled/Button'
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

            <Button.Link to='/unauthorized/login'>Log in</Button.Link>
            <Button.LinkPrimary to='/unauthorized/signup'>Sign up</Button.LinkPrimary>
        </S.AccessPage>
    )
}

