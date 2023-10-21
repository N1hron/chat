import { Routes, Route } from 'react-router-dom'

import MainLayout from '../layouts/mainLayout/MainLayout'
import ProfilePage from '../pages/profilePage/ProfilePage'
import MessagesPage from '../pages/messagesPage/MessagesPage'
import LogInPage from '../pages/LogInPage'
import SignUpPage from '../pages/SignUpPage'
import AccessPage from '../pages/accessPage/AccessPage'
import UsersPage from '../pages/usersPage/UsersPage'
import CheckUser from './checkUser/CheckUser'
import NotFound from '../pages/notFound/NotFound'
import UnauthorizedLayout from '../layouts/unauthorizedLayout/UnauthorizedLayout'


export default function App() {
    return (
        <CheckUser>
            <Routes>
                <Route path='/' element={ <MainLayout/> }>
                    <Route path='profile' element={ <ProfilePage/> }/>
                    <Route path='messages' element={ <MessagesPage/> }/>
                    <Route path='users' element={ <UsersPage/> }/>
                </Route>

                <Route path='/unauthorized' element={ <UnauthorizedLayout/> }>
                    <Route index element={ <AccessPage/> }/>
                    <Route path='login' element={ <LogInPage/> }/>
                    <Route path='signup' element={ <SignUpPage/> }/>
                </Route>

                <Route path='*' element={ <NotFound/> }/>
            </Routes>
        </CheckUser>
    )
}