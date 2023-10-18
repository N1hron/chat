import { useEffect } from 'react'

import * as S from './style'
import useFirestore from '../../hooks/firestore.hook'


export default function UsersList() {
    const { getUsers } = useFirestore()

    useEffect(getUsers, [])

    return <S.UsersList></S.UsersList>
}