import Header from '../header/Header'
import * as S from './style'


export default function Feature({ title, children }) {
    return (
        <S.Feature>
            <Header title={ title }/>
            <S.Content>
                { children }
            </S.Content>
        </S.Feature>
    )
}
