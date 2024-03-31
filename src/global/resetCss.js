import { createGlobalStyle } from 'styled-components'

export const ResetCSS = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
`