import { createGlobalStyle } from 'styled-components'
import { theme } from 'config'

export const AppStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    font-size: 62.5%;
  }
  body {
    height: 100vh;
    overflow: hidden;
    scroll-behavior: smooth;
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.paragraph};
    background: ${theme.colors.neutral[800]};
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
`
