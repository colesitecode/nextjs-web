import Head from 'next/head'
import { Container } from '../styles/GlobalStyle'
import styled from 'styled-components'
import About_background from '../components/images/about-img.jpg'
import Image from 'next/image'

const About_Title = styled.div`
    margin-top: 100px;
    margin-bottom: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Title_Div = styled.div`
    width: 83%;
`
const Heading = styled.h4`
  text-align: center;
  color: #E21F36;
  font-weight: 700;
  font-size: 18px;
`
const SubHeading = styled.h2`
    font-weight: 800;
    font-size: 30px;
    color: #000219;
    text-align: center;
`

const Row = styled.div`
  width: 100%;
  display: flex;
`

const Col = styled.div`
  width: 50%;
  margin: 18px;
`

const About_Us = styled.h2`
  font-weight: 800;
  font-size: 21px;
  margin-bottom: 15px;
  color: #000219;
`

const About_Row = styled.div`
  display: flex;
  margin-bottom: 18px;
`

const About_Col1 = styled.div`
  margin-right: 15px;
  width: 50%;
  background: #000219;
  padding: 13px;
  border-left: 3px solid #D63384;
`
const About_Col3 = styled.div`
  margin-right: 15px;
  width: 50%;
  background: #ffffff;
  padding: 13px;
  border-left: 3px solid #E21F36;
`

const About_Col4 = styled.div`
  margin-right: 15px;
  width: 50%;
  background: #000219;
  padding: 13px;
  border-left: 3px solid #D63384;
`

const About_Col_Title = styled.h2`
  color: #FFFFFF;
  font-weight: 800;
  font-size: 24px;
  padding-bottom: 8px;
`

const About_Col_Title1 = styled.h2`
  font-weight: 800;
  font-size: 24px;
  padding-bottom: 8px;
  color: #000219;
`

const Description = styled.h3`
  color: #FFFFFF;
  font-weight: normal;
font-size: 15px;
`
const Description1 = styled.h3`
  color: #4B5280;
  font-weight: normal;
  font-size: 15px;
`
const About_Col2 = styled.div`
  margin-right: 15px;
  width: 50%;
  background: #ffffff;
  padding: 13px;
  border-left: 3px solid #E21F36;
  position: relative;
  overflow: hidden;
  &:hover{
    background: #000219;
  ${About_Col_Title1}{
    color: #ffffff;
  }
  ${Description1}{
    color: #ffffff;
  }
}
`

export default function About() {
  return (
    <>
    <Container id="about">
      <About_Title>  
        <Title_Div>
          <Heading>About us</Heading>
          <SubHeading>
            IT service management for our client need unique and require 
            a customized set of solutions and service deliverables.
          </SubHeading>
        </Title_Div>
      </About_Title>
    <Row>
      <Col>
          <Image src={About_background} alt="About Background" />
      </Col>

        <Col>
            <About_Us>
              High competent IT Company, we offer you the most advanced solution with no compromises 
              and employing the best technically-skilled field engineers to give you the high quality 
              service and customer satisfaction as its highest rate are ourselves providing a comprehensive IT solution.
            </About_Us>

            <About_Row>
              <About_Col1>
                <About_Col_Title>MODERNTECH</About_Col_Title>
                <Description>
                  Started year 2003 as a One-Stop-Shop to nationwide service organization. 
                  Our products and services have crossed over into full nationwide service coverage.
                </Description>
              </About_Col1>

              <About_Col2>
                <About_Col_Title1>MODERNTECH</About_Col_Title1>
                <Description1>
                  services are available 9/7 and can be 
                  customized to 24/7 in preference to customer requirements for Remote, Onsite and Carry-In SLA. 
                </Description1>
              </About_Col2>
            </About_Row>

            <About_Row>
              <About_Col3>
                <About_Col_Title1>MODERNTECH</About_Col_Title1>
                <Description1>
                  Providing Operating System Installation, Application, Reimaging, 
                  Anti-virus Installation, Helpdesk Support, Software Inventory.
                </Description1>
              </About_Col3>

              <About_Col4>
                <About_Col_Title>MODERNTECH</About_Col_Title>
                <Description>
                  Retail Solutions and System Integration under DaaS such as Desktop, Server, Storage , 
                  Laptop, POS machine, Printer Sale, 
                  Device, Part Sales, CCTV, IP Camera & Alarms. 
                </Description>
              </About_Col4>
            </About_Row>
        </Col>
      </Row>
</Container>
    </>
  )
}
