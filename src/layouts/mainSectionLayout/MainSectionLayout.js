import Header from '../../components/header/Header'
import * as S from './style'


export default function MainSection({ title, children }) {
    return (
        <S.MainSection>
            <Header title={ title }/>
            
            <S.Content>
                { children }
            </S.Content>
        </S.MainSection>
    )
}

