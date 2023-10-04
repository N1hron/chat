import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { AnimatePresence } from 'framer-motion'

import * as S from './style'
import StatusMessage from '../statusMessage/StatusMessage'
import { setUser } from '../../store/slices/userSlice'

export default function CheckUser({ children }) {
    const [userChecked, setUserChecked] = useState(false)
    const [showContent, setShowContent] = useState(false)
    const dispatch = useDispatch()

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
            
            setTimeout(() => {
                setUserChecked(true)
                setTimeout(() => setShowContent(true), 200)
            }, 1000)
        })
    }

    return (
        <AnimatePresence>
            { 
                !userChecked && 
                <S.StatusMessageContainer>
                    <StatusMessage type='loading'>Loading</StatusMessage>
                </S.StatusMessageContainer> 
            }
            { showContent && children }
        </AnimatePresence>
    )
}