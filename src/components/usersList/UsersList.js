import { useEffect, useState, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import * as S from './style'
import useFirestore from '../../hooks/firestore.hook'
import { selectUsers, setUsers } from '../../store/slices/usersSlice'
import User from './User'
import { selectUserId } from '../../store/slices/usersSlice'
import UsersListPageSelect from './UsersListPageSelect'
import StatusMessage from '../statusMessage/StatusMessage'


export default function UsersList() {
    const { getUsers, status } = useFirestore()
    const dispatch = useDispatch()

    const [page, setPage] = useState(1)

    const users = useSelector(selectUsers),
          currentUserId = useSelector(selectUserId),
          usersPerPage = 6
          
    useEffect(() => { getUsers().then(users => dispatch(setUsers(users))) }, [])
    
    function renderUsers() {
        if (status.type === 'success') {
            const numberOfPages = Math.ceil((users.length - 1) / usersPerPage),
                  usersSliced = users.slice(usersPerPage * page - usersPerPage, usersPerPage * page)
            
            const renderedUsers = usersSliced.filter(user => user.id.trim() !== currentUserId).map(user => (
                <User 
                    key={ user.id } 
                    name={ user.name } 
                    photoURL={ user.photoURL }
                />
            ))

            return (
                <>
                    <ul>
                        { renderedUsers }
                    </ul>
                    <UsersListPageSelect
                        page={ page }
                        setPage={ setPage }
                        numberOfPages={ numberOfPages }
                    />
                </>
            )
        }
    }
    
    return (
        <S.UsersList>
            {
                status.type === 'success' ? renderUsers() :
                <S.MessageContainer>
                    <StatusMessage type={ status.type }>{ status.message }</StatusMessage>
                </S.MessageContainer>
            }
        </S.UsersList>
    )
}