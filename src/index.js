import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import './firebase'

import App from './components/App'
import './styles/normalize.css'
import store from './store'
import GlobalStyle from './styles/GlobalStyle'
import { themes } from './styles/themes'


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Provider store={ store }>
                <ThemeProvider theme={ themes.main }>
                    <GlobalStyle/>
                    <App/>
                </ThemeProvider>
            </Provider>
        </BrowserRouter>
    </StrictMode>
)
