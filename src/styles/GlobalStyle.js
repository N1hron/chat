import { createGlobalStyle } from 'styled-components'
import interRegular from '../resources/fonts/Inter-Regular.ttf'
import interBold from '../resources/fonts/Inter-Bold.ttf'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Inter';
        font-weight: 400;
        src: url(${interRegular}) format('truetype');
    }

    @font-face {
        font-family: 'Inter';
        font-weight: 700;
        src: url(${interBold}) format('truetype');
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    body, #root {
        height: 0;
        min-height: 100vh;
    }

    main {
        flex-grow: 1;
    }

    #root {
        display: flex;
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
    }
`

export default GlobalStyle