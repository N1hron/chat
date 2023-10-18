import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import * as S from './style'
import useFirestore from '../../hooks/firestore.hook'
import { selectUsers, setUsers } from '../../store/slices/usersSlice'
import User from './User'
import { Button } from '../styled/Button'
import { ReactComponent as BackIcon } from '../../assets/icons/navigate_before.svg'
import { ReactComponent as NextIcon } from '../../assets/icons/navigate_next.svg'


export default function UsersList() {
    const { getUsers } = useFirestore()
    const dispatch = useDispatch()

    const users = useSelector(selectUsers),
          [offset, setOffset] = useState(1),
          usersPerPage = 5

    useEffect(() => {
        getUsers().then(users => dispatch(setUsers(users)))
    }, [])

    function renderUsers() {
        return users.map(user => (
            <User 
                key={ user.id } 
                name={ user.name } 
                photoURL={ user.photoURL }
            />
        ))
    }

    const renderedUsers = renderUsers().slice(usersPerPage * offset - usersPerPage, usersPerPage * offset)
    console.log(renderedUsers)
    return (
        <S.UsersList>
            <ul>
                { renderedUsers }
            </ul>
            <S.UsersOffset>
                <Button.Light 
                    onClick={ () => setOffset(prev => prev -= 1) }
                    disabled={ offset <= 1 }
                >
                    <BackIcon/>
                </Button.Light>
                <p>{ offset }</p>
                <Button.Light 
                    onClick={ () => setOffset(prev => prev += 1) }
                    disabled={ offset >= users.length / usersPerPage }
                >
                    <NextIcon/>
                </Button.Light>
            </S.UsersOffset>
        </S.UsersList>
    )
}