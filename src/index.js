import './styles/normalize.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import './firebase'

import App from './components/App'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Provider store={ store }>
                <App />
            </Provider>
        </BrowserRouter>
    </StrictMode>
)
