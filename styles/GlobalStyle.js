import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    scroll-behavior: smooth;
    height:100%;
    overflow:hidden;
  }
  body {
    font-family: 'Lato', sans-serif;
    cursor: default;
    background: #F8F9FA;

    perspective: 1px;
    transform-style: preserve-3d;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
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

export const Button = styled.button`
  background: #e21f36;
  transition: background-color .4s ease-out 100ms;
  padding: 10px 20px;
  margin: 15px 0;
  display: inline-block;
  -webkit-transform: translate(0%, 0%);
  transform: translate(0%, 0%);
  overflow: hidden;
  color: #fff;
  font-size: 20px;
  letter-spacing: 2.5px;
  text-align: center;
  /* text-transform: uppercase; */
  text-decoration: none;
  -webkit-box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  border: none;
  &:hover{
    background-color: #fd7e14;
  }
`

export const Span1 = styled.div`
position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 2px;
  background: -webkit-gradient(linear, right top, left top, from(rgba(8, 20, 43, 0)), to(#fff));
  background: linear-gradient(to left, rgba(8, 20, 43, 0), #fff);
  -webkit-animation: 2s animateTop linear infinite;
  animation: 2s animateTop linear infinite;
  @-webkit-keyframes animateTop {
  0% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
  100% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}

@keyframes animateTop {
  0% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
  100% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}
`

export const Span2 = styled.div`
position: absolute;
  top: 0px;
  right: 0px;
  height: 100%;
  width: 2px;
  background: -webkit-gradient(linear, left bottom, left top, from(rgba(8, 20, 43, 0)), to(#fff));
  background: linear-gradient(to top, rgba(8, 20, 43, 0), #fff);
  -webkit-animation: 2s animateRight linear -1s infinite;
  animation: 2s animateRight linear -1s infinite;
  @-webkit-keyframes animateRight {
  0% {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
  100% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
}

@keyframes animateRight {
  0% {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
  100% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }  
}
`

export const Span3 = styled.div`
position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 2px;
  background: -webkit-gradient(linear, left top, right top, from(rgba(8, 20, 43, 0)), to(#fff));
  background: linear-gradient(to right, rgba(8, 20, 43, 0), #fff);
  -webkit-animation: 2s animateBottom linear infinite;
  animation: 2s animateBottom linear infinite;
  @-webkit-keyframes animateBottom {
  0% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  100% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
}

@keyframes animateBottom {
  0% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  100% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
}
`

export const Span4 = styled.div`
position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 2px;
  background: -webkit-gradient(linear, left top, left bottom, from(rgba(8, 20, 43, 0)), to(#fff));
  background: linear-gradient(to bottom, rgba(8, 20, 43, 0), #fff);
  -webkit-animation: 2s animateLeft linear -1s infinite;
  animation: 2s animateLeft linear -1s infinite;
  @-webkit-keyframes animateLeft {
  0% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
  100% {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
}

@keyframes animateLeft {
  0% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
  100% {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
}
`


export default GlobalStyles;