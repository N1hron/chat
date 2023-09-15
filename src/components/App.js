import { ThemeProvider } from 'styled-components'
import { Routes, Route } from 'react-router-dom'

import { themes } from '../styles/themes'
import GlobalStyle from '../styles/GlobalStyle'
import Layout from './Layout'
import ProfilePage from '../pages/ProfilePage'
import ChatPage from '../pages/ChatPage'
import LogInPage from '../pages/LogInPage'
import SignUpPage from '../pages/SignUpPage'

function App() {
  return (
    <ThemeProvider theme={ themes.main }>
      <GlobalStyle/>
      <Routes>
          <Route path='/' element={ <Layout/> }>
            <Route path='profile' element={ <ProfilePage/> }/>
            <Route path='chat' element={ <ChatPage/> }/>
          </Route>
          <Route path='/login' element={ <LogInPage/> }/>
          <Route path='/signup' element={ <SignUpPage/> }/>
      </Routes>
    </ThemeProvider>
  )
}

export default App