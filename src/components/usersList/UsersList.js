import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import * as S from './style'
import useFirestore from '../../hooks/firestore.hook'
import { selectUsers, setUsers } from '../../store/slices/usersSlice'
import User from './User'
import { Button } from '../styled/Button'
import { ReactComponent as BackIcon } from '../../assets/icons/navigate_before.svg'
import { ReactComponent as NextIcon } from '../../assets/icons/navigate_next.svg'
import { selectUserId } from '../../store/slices/usersSlice'


export default function UsersList() {
    const { getUsers } = useFirestore()
    const dispatch = useDispatch()

    const users = useSelector(selectUsers),
          currentUserId = useSelector(selectUserId),
          [offset, setOffset] = useState(1),
          usersPerPage = 6

    useEffect(() => {
        getUsers().then(users => dispatch(setUsers(users)))
    }, [])

    function renderUsers() {
        return users.filter(user => user.id !== currentUserId).map(user => (
            <User 
                key={ user.id } 
                name={ user.name } 
                photoURL={ user.photoURL }
            />
        ))
    }

    const renderedUsers = renderUsers().slice(usersPerPage * offset - usersPerPage, usersPerPage * offset)
    
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
                    disabled={ offset >= (users.length - 1) / usersPerPage }
                >
                    <NextIcon/>
                </Button.Light>
            </S.UsersOffset>
        </S.UsersList>
    )
}