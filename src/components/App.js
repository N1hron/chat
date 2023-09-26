import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import MainLayout from '../layouts/mainLayout/MainLayout'
import UnauthorizedLayout from '../layouts/unauthorizedLayout/UnauthorizedLayout'
import ProfilePage from '../pages/profilePage/ProfilePage'
import MessagesPage from '../pages/messagesPage/MessagesPage'
import LogInPage from '../pages/LogInPage'
import SignUpPage from '../pages/SignUpPage'
import AccessPage from '../pages/accessPage/AccessPage'
import RequireAuth from './RequireAuth'
import RequireUnauthorized from './RequireUnauthorized'
import CheckUser from './CheckUser'


const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path='/' element={ 
            <RequireAuth>
                <MainLayout/>
            </RequireAuth> 
        }>
            <Route path='profile' element={ <ProfilePage/> }/>
            <Route path='messages' element={ <MessagesPage/> }/>
        </Route>

        <Route path='/unauthorized/' element={ 
            <RequireUnauthorized>
                <UnauthorizedLayout/>
            </RequireUnauthorized> 
        }>
            <Route index element={ <AccessPage/> }/>
            <Route path='login' element={ <LogInPage/> }/>
            <Route path='signup' element={ <SignUpPage/> }/>
        </Route>
    </>
))

export default function App() {
    return (
        <CheckUser>
            <RouterProvider router={ router }/>
        </CheckUser>
    )
}