import * as S from './style'


export default function Overlay({ children }) {
    return (
        <S.Overlay>
            <S.Container>
                { children }
            </S.Container>
        </S.Overlay>
    )
}