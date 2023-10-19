import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import * as S from './style'
import useFirestore from '../../hooks/firestore.hook'
import { selectUsers, setUsers } from '../../store/slices/usersSlice'
import User from './User'
import { selectUserId } from '../../store/slices/usersSlice'
import UsersListPageSelect from './UsersListPageSelect'


export default function UsersList() {
    const { getUsers } = useFirestore()
    const dispatch = useDispatch()

    const [page, setPage] = useState(1)

    const users = useSelector(selectUsers),
          currentUserId = useSelector(selectUserId),
          usersPerPage = 6,
          numberOfPages = Math.ceil((users.length - 1) / usersPerPage)

    useEffect(() => { getUsers().then(users => dispatch(setUsers(users))) }, [])
    
    function renderUsers() {
        return users.filter(user => user.id.trim() !== currentUserId).map(user => (
            <User 
                key={ user.id } 
                name={ user.name } 
                photoURL={ user.photoURL }
            />
        ))
    }

    const renderedUsers = renderUsers().slice(usersPerPage * page - usersPerPage, usersPerPage * page)
    
    return (
        <S.UsersList>
            <ul>
                { renderedUsers }
            </ul>
            
            <UsersListPageSelect
                page={ page }
                setPage={ setPage }
                numberOfPages={ numberOfPages }
            />
        </S.UsersList>
    )
}