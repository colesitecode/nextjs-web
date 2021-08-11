import Head from 'next/head'
import styled from 'styled-components'
import About_background from '../components/images/about-img.jpg'
import Image from 'next/image'
import service1 from '../components/images/service1.png'
import service2 from '../components/images/service2.png'
import service3 from '../components/images/service3.png'
import service4 from '../components/images/service4.png'

const Services_Title = styled.div`
    margin-top: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 50px;
`
const Title_Div = styled.div`
    width: 70%;
`
const Heading = styled.h4`
  text-align: center;
  color: #ffffff;
  font-weight: 700;
  font-size: 18px;
`
const SubHeading = styled.h2`
    font-weight: 800;
    font-size: 30px;
    color: #ffffff;
    text-align: center;
`

const Service_Div = styled.div`
  width: 100%;
  background: #000219;
`

const Service_Row = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`
const Service_Col = styled.div`
  width: 23%;
  height: 300px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 8px;
`
const Icon = styled.div`
`
const Title = styled.h2`
  color: #000000;
  text-align: center;
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: 800;

`
const Description = styled.h3`
  text-align: center;
  color: #4B5280;
  font-weight: normal;
  font-size: 16px;
`

export default function Services() {
  return (
    <>
      <Service_Div id="services">

        <Services_Title>  
          <Title_Div>
            <Heading>Our Services</Heading>
            <SubHeading>
              Using the state of the art technology,MODERNTECH
              offers products and services
            </SubHeading>
          </Title_Div>
        </Services_Title>

        <Service_Row>

          <Service_Col>
            <Icon>
              <Image src={service1} alt="Moderntech Services" />
            </Icon>
            <Title>SERVICE MAINTENANCE</Title>
            <Description>
              Moderntech's Maintenance Agreement contract. Provide service repair, 
              proactive and preventive maintenance to all machines covered by Maintenance Agreement.
            </Description>
          </Service_Col>

          <Service_Col>
            <Icon>
              <Image src={service2} alt="Moderntech Services" />
            </Icon>
            <Title>CORRECTIVE REPAIR</Title>
            <Description>
            Service rendered to all PER CALL Customers. Per call rates were given to our clients to cover 
            their different machines like PC desktop, laptop, server, POS and Printer.
            </Description>
          </Service_Col>


          <Service_Col>
            <Icon>
              <Image src={service3} alt="Moderntech Services" />
            </Icon>
            <Title>NETWORK & CABLING SERVICES</Title>
            <Description>
              Diagnostics, Checking and testing of network. 
              Structured cabling services assessment and proposal for data center services.
            </Description>
          </Service_Col>


          <Service_Col>
            <Icon>
              <Image src={service4} alt="Moderntech Services" />
            </Icon>
            <Title>IMAC</Title>
            <Description>
              Services for clients who need different types of services like Installation 
              of Hardware and Software, moving out of machines.
            </Description>
          </Service_Col>



        </Service_Row>

        </Service_Div>
    </>
  )
}
