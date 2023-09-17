import { ThemeProvider } from 'styled-components'
import { Routes, Route } from 'react-router-dom'

import { themes } from '../styles/themes'
import GlobalStyle from '../styles/GlobalStyle'
import MainLayout from '../layouts/MainLayout'
import UnauthorizedLayout from '../layouts/UnauthorizedLayout'
import ProfilePage from '../pages/ProfilePage'
import ChatPage from '../pages/ChatPage'
import LogInPage from '../pages/LogInPage'
import SignUpPage from '../pages/SignUpPage'
import AccessPage from '../pages/AccessPage'

function App() {
    return (
        <ThemeProvider theme={ themes.main }>
            <GlobalStyle/>

            <Routes>
                <Route path='/' element={ <MainLayout/> }>
                    <Route path='/profile' element={ <ProfilePage/> }/>
                    <Route path='/chat' element={ <ChatPage/> }/>
                </Route>

                <Route path='/unauthorized' element={ <UnauthorizedLayout/> }>
                    <Route index element={ <AccessPage/> }/>
                    <Route path='/unauthorized/login' element={ <LogInPage/> }/>
                    <Route path='/unauthorized/signup' element={ <SignUpPage/> }/>
                </Route>
            </Routes>
        </ThemeProvider>
    )
}

export default App