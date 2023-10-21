import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import * as S from './style'
import StatusMessage from '../statusMessage/StatusMessage'
import { setUser } from '../../store/slices/usersSlice'


export default function CheckUser({ children }) {
    const dispatch = useDispatch()

    const [userChecked, setUserChecked] = useState(false)

    useEffect(onInitialLoading, [])

    function onInitialLoading() {
        onAuthStateChanged(getAuth(), user => {
            if (user) {
                dispatch(setUser({ 
                    email: user.email, 
                    username: user.displayName,
                    id: user.uid,
                    photoURL: user.photoURL
                }))
            }
            
            setUserChecked(true)
        })
    }

    return (
        userChecked ? children :
        <S.Content>
            <StatusMessage type='loading'>Loading</StatusMessage>
        </S.Content>
    )
}