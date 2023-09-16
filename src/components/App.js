import { ThemeProvider } from 'styled-components'
import { Routes, Route } from 'react-router-dom'

import { themes } from '../styles/themes'
import GlobalStyle from '../styles/GlobalStyle'
import MainLayout from '../layouts/MainLayout'
import AnonymousLayout from '../layouts/AnonymousLayout'
import ProfilePage from '../pages/ProfilePage'
import ChatPage from '../pages/ChatPage'
import LogInPage from '../pages/LogInPage'
import SignUpPage from '../pages/SignUpPage'

function App() {
    return (
        <ThemeProvider theme={ themes.main }>
            <GlobalStyle/>

            <Routes>
                <Route path='/' element={ <AnonymousLayout/> }>
                    <Route path='login' element={ <LogInPage/> }/>
                    <Route path='signup' element={ <SignUpPage/> }/>
                </Route>

                <Route path='/home' element={ <MainLayout/> }>
                    <Route path='/home/profile' element={ <ProfilePage/> }/>
                    <Route path='/home/chat' element={ <ChatPage/> }/>
                </Route>
            </Routes>

        </ThemeProvider>
    )
}

export default App