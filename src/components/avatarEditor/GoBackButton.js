import * as S from './style'
import { ReactComponent as GoBackIcon } from '../../assets/icons/arrow-back.svg'


export default function GoBackButton({ onClick }) {
    return (
        <S.GoBackButton onClick={ onClick }>
            <GoBackIcon/>
        </S.GoBackButton>
    )
}