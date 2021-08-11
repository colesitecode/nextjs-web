import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    scroll-behavior: smooth;

  }
  body {
    /* @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;900&display=swap'); */
    font-family: 'Lato', sans-serif;
    cursor: default;
    background: #F8F9FA;
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
`;

export const Container = styled.div`
 z-index: 1;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-right: 50px;
  padding-left: 50px;

@media screen and (max-width: 960px){
    padding-right: 30px;
    padding-left: 30px;
}

`

export default GlobalStyles;