import { ThemeProvider } from 'styled-components'
import { Routes, Route } from 'react-router-dom'

import { themes } from '../styles/themes'
import Sidebar from './Sidebar'
import ProfilePage from '../pages/ProfilePage'
import ChatPage from '../pages/ChatPage'

function App() {
  return (
    <ThemeProvider theme={themes.main}>
        <Sidebar/>
        <main>
            <Routes>
                <Route path='/profile' element={<ProfilePage/>}/>
                <Route path='/chat' element={<ChatPage/>}/>
            </Routes>
        </main>
    </ThemeProvider>
  )
}

export default App