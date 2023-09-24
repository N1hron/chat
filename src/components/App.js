import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { AnimatePresence } from 'framer-motion'

import MainLayout from '../layouts/MainLayout'
import UnauthorizedLayout from '../layouts/UnauthorizedLayout'
import ProfilePage from '../pages/ProfilePage'
import MessagesPage from '../pages/MessagesPage'
import LogInPage from '../pages/LogInPage'
import SignUpPage from '../pages/SignUpPage'
import AccessPage from '../pages/AccessPage'
import RequireAuth from './RequireAuth'
import RequireUnauthorized from './RequireUnauthorized'
import StatusMessage from './StatusMessage'
import { setUser } from '../store/slices/userSlice'


function App() {
    const [initialLoading, setInitialLoading] = useState(true)
    const [showMain, setShowMain] = useState(false)
    const dispatch = useDispatch()

    useEffect(onInitialLoading, [])

    function onInitialLoading() {
        onAuthStateChanged(getAuth(), user => {
            if (user) {
                dispatch(setUser({ 
                    email: user.email, 
                    username: user.displayName,
                    id: user.uid,
                    token: user.accessToken
                }))
            }
            
            setTimeout(() => {
                setInitialLoading(false)
                setTimeout(() => setShowMain(true), 200)
            }, 1000)
        })
    }

    return (
        <>
            <AnimatePresence>
                { initialLoading && <StatusMessage type='loading'>Loading</StatusMessage> }
            </AnimatePresence>
            {
                showMain &&
                <Routes>
                    <Route 
                        path='/' 
                        element={ 
                            <RequireAuth>
                                <MainLayout/>
                            </RequireAuth> 
                        }
                    >
                        <Route path='/profile' element={ <ProfilePage/> }/>
                        <Route path='/messages' element={ <MessagesPage/> }/>
                    </Route>

                    <Route 
                        path='/unauthorized' 
                        element={ 
                            <RequireUnauthorized>
                                <UnauthorizedLayout/>
                            </RequireUnauthorized> 
                        }
                    >
                        <Route index element={ <AccessPage/> }/>
                        <Route path='/unauthorized/login' element={ <LogInPage/> }/>
                        <Route path='/unauthorized/signup' element={ <SignUpPage/> }/>
                    </Route>
                </Routes>
            }
        </>
    )
}

export default App