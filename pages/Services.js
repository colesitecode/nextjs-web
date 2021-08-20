import styled from 'styled-components'
import Image from 'next/image'
import service1 from '../components/images/service1.png'
import service2 from '../components/images/service2.png'
import service3 from '../components/images/service3.png'
import service4 from '../components/images/service4.png'
import style from '../styles/Style.module.css'

const Service_Div = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 150px;
`

const Container = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
`

const Services_Title = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
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

const Service_Row = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`

const Border1 = styled.div`
  top:0;
  left:0;
  width:0;
  height:0;
  border-top:2px solid #e21f36;
  position:absolute;
  background:none;
  transition:all .5s ease-in-out;
`
const Border2 = styled.div`
  top:0;
  right:0;
  width:10px;
  height:0;
  border-right:2px solid #e21f36;

  position:absolute;
  background:none;
  transition:all .5s ease-in-out;
`
const Border3 = styled.div`
  bottom:0;
  right:0;
  width:0;
  height:0;
  border-bottom:2px solid #e21f36;

  position:absolute;
  background:none;
  transition:all .5s ease-in-out;
`
const Border4 = styled.div`
  bottom:0;
  left:0;
  width:0;
  height:0;
  border-left:2px solid #e21f36;
  
  position:absolute;
  background:none;
  transition:all .5s ease-in-out;
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

  position:relative;
  &:hover{
  ${Border1}{
    width:103%;
  }
  ${Border2}{
    height: 103%;
  }
  ${Border3}{
    width:103%;
  }
  ${Border4}{
    height:103%;
  }
}
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
      <Service_Div id="services" className={style.Service_background}>
        <Container>
        <Services_Title>  
          <Title_Div>
            <Heading>Our Services</Heading>
            <SubHeading>
              Using the state of the art technology, MODERNTECH
              offers products and services.
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

            <Border1/>
            <Border2/>
            <Border3/>
            <Border4/>
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
        </Container>
        </Service_Div>
  )
}
