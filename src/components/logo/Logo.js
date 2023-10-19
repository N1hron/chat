import * as S from './style'
import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg'


export default function Logo({ miniMode }) {
    return (
        <S.Logo>
            <LogoIcon/>
            { !miniMode && <h1><span>C</span>hat</h1> }
        </S.Logo>
    )
}