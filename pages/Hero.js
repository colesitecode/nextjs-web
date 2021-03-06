import React from 'react'
import styled from 'styled-components'
import hero_background from '../components/images/background.jpg'
import TopHeader from '../components/TopHeader'
import NavBar from '../components/NavBar'
import Hero_Content from '../pages/Hero_Content'
import { PlayBtn_Animation } from '../styles/keyframes';
import { Button, Span1, Span2, Span3, Span4 } from '../styles/GlobalStyle'
import Style from '../styles/Style.module.css'

const Hero = styled.div`
  /* background-image: url('${hero_background}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
  /* background: #0C1444; */
  width: 100%;
  height: 820px;
  margin-bottom: -100px;
`

const Hero_Title = styled.div`
  text-align: left;
  width: 100%;
  margin-top: 100px; 
  margin-left: 100px;
`

const Heading = styled.h1`
  color: #ffffff;
  font-size: 65px;
  letter-spacing: 0.08em;
  font-weight: 900;
`

const SubHeading = styled.h3`
  color: #ffffff;
  padding: 8px 0;
  font-weight: 900;
  font-size: 28px;
`

const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

const Col = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  position: relative;
`

const PlayBtn = styled.div`
  width: 100%;
  height: 100%;

`

const Circle = styled.div`
  width: 80px;
  height: 80px;
  background-color: #e21f36;
  border-radius: 50%;
  position: relative;
  display: block;
  margin: 100px auto;
  box-shadow: 0px 0px 9px 8px rgba(226, 31, 54, 0.5 );
  transition: background-color .4s ease-out 100ms;
  &::after{
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translateX(-40%) translateY(-50%);
  transform: translateX(-40%) translateY(-50%);
  transform-origin: center center;
  width: 0;
  height: 0;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 25px solid #fff;
  z-index: 100;
  -webkit-transition: all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
  transition: all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
  cursor: pointer;
  }
  &::before{
  content: "";
  position: absolute;
  width: 150%;
  height: 150%;
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
  -webkit-animation: pulsate1 2s;
  animation: pulsate1 2s;
  -webkit-animation-direction: forwards;
  animation-direction: forwards;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: steps;
  animation-timing-function: steps;
  opacity: 1;
  border-radius: 50%;
  border: 5px solid rgba(255, 255, 255, .75);
  top: -30%;
  left: -30%;
  background: rgba(198, 16, 0, 0);
  animation: ${PlayBtn_Animation} 3s infinite;
  cursor: pointer;
  }
  &:hover{
    background-color: #fd7e14;
    box-shadow: 0px 0px 9px 5px rgba(253, 126, 20, 0.3);
  }
`


export default function Home() {
  return (
    <>

    <Hero id="home" className={Style.Hero_background}>
      {/* Top Header Page */}
      <TopHeader/>
      {/* NavBar Page */}
      <NavBar />

        <Row>
          <Col>
            <Hero_Title>
                <Heading>MODERNTECH</Heading>
                <SubHeading>Your Nationwide On-the-Ground Information Technology  Partner.</SubHeading>
                <Button>
                  Contact Us
                  <Span1/>
                  <Span2/>
                  <Span3/>
                  <Span4/>
                </Button>
            </Hero_Title>
          </Col>

          <Col>
              <PlayBtn>
                <Circle></Circle>
              </PlayBtn>
          </Col>
        </Row>

    </Hero>
    
        {/* Hero Content Page */}
        <Hero_Content/>
    
    </>
   
  )
}
