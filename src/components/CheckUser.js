import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { AnimatePresence } from 'framer-motion'

import StatusMessage from './statusMessage/StatusMessage'
import { setUser } from '../store/slices/userSlice'

export default function CheckUser({ children }) {
    const [userChecked, setUserChecked] = useState(false)
    const [showContent, setShowContent] = useState(false)
    const dispatch = useDispatch()

    useEffect(onInitialLoading, [])

    function onInitialLoading() {
        onAuthStateChanged(getAuth(), user => {
            console.log(user.photoURL)
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
            { !userChecked && <StatusMessage type='loading'>Loading</StatusMessage> }
            { showContent && children }
        </AnimatePresence>
    )
}