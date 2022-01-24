import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
 
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Raleway;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  body {
    font-size: 1.6rem;
 
    cursor: default;
  }
  h1,h2,h3,h4,h5,h6,button {
   
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
`;

export default GlobalStyles;