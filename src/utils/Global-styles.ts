import { createGlobalStyle } from 'styled-components'
import colors from './colors'

const GlobalStyle = createGlobalStyle`
    .loading {
        width: 100vw;
        height: 100vh;
        background-color: ${colors.gray};
        position: absolute;
        top: 0;
        left: 0;
    }

    .loading:after {
        content: "Loading";
        font-size: 30px;
        color: white;
    }
`

export default GlobalStyle