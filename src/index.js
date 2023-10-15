import './firebase'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import App from './components/App'
import './styles/normalize.css'
import store from './store'
import GlobalStyle from './styles/GlobalStyle'
import { themes } from './styles/themes'


const root = createRoot(document.getElementById('root'))

root.render(
    <StrictMode>
        <Provider store={ store }>
            <ThemeProvider theme={ themes.main }>
                <GlobalStyle/>
                <App/>
            </ThemeProvider>
        </Provider>
    </StrictMode>
)
