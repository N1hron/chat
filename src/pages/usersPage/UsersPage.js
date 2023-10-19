import * as S from './style'
import Feature from '../../components/feature/Feature'
import Block from '../../components/styled/Block'
import UsersList from '../../components/usersList/UsersList'


export default function UsersPage() {

    return (
        <Feature title='Users'>
            <S.Content>
                <UsersList/> 
                <Block/>
            </S.Content>
        </Feature>
    )
}