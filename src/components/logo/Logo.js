import * as S from './style'
import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg'


export default function Logo() {
    return (
        <S.Logo>
            <LogoIcon/>
            <h1><span>C</span>hat</h1>
        </S.Logo>
    )
}