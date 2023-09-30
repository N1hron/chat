import Feature from '../../components/feature/Feature'
import UserInfo from '../../components/userInfo/UserInfo'
import Block from '../../components/styled/Block'
import * as S from './style'


export default function ProfilePage() {
    return (
        <Feature title='Profile'>
            <S.Content>
                <UserInfo/>
                <Block></Block>
                <Block></Block>
            </S.Content>
        </Feature>
    )
}