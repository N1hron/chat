import './styles/normalize.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './components/App'
import GlobalStyle from './styles/GlobalStyle'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <GlobalStyle/>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>
)