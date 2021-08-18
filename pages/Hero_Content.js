import styled from "styled-components";
import{ Container } from '../styles/GlobalStyle'
import Image from 'next/image'
import icon1 from '../components/images/hero_icon1.png'
import icon2 from '../components/images/hero_icon2.png'
import icon3 from '../components/images/hero_icon3.png'

const Row = styled.div`
    width: 100%;
    /* max-height: 250px; */
    display: flex;
    align-items: center;
    justify-content: center;
`

const Col = styled.div`
    width: 435px;
    height: 100%;
    background: #000219;
    margin: 18px;
`

const Hero_Title = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 10px;
    padding-right: 10px;
`

const Icon = styled.div`
    padding: 10px;
    width: 25%;
`

const Title = styled.h3`
    color: #ffffff;
    font-size: 24px;
`

const Title_Div = styled.div`
    width: 75%;
`

const Description_Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 25px;
    padding-right: 25px;
    width: 100%;
    height: 60%;
    padding-bottom: 18px;
`

const Description = styled.h4`
    font-weight: 500;
    font-size: 20px;
    color: #FFFFFF;
    text-align: center;
`

export default function Home() {
    return (
      <>
      <Container>
        <Row>
            <Col>
                <Hero_Title>
                    <Icon>
                        <Image src={icon1} alt="One-location repair shop icon" />
                    </Icon>
                    
                    <Title_Div>
                        <Title>
                            One-location repair shop
                        </Title>
                    </Title_Div>

                </Hero_Title>

                <Description_Div>
                    <Description>
                        Nationwide service organization
                        Metro Manila, Provincial points-of-presence with full-time employees.
                    </Description>
                </Description_Div>
            </Col>

            <Col>
                <Hero_Title>
                    <Icon>
                    <Image src={icon2} alt="One-location repair shop icon" />
                    </Icon>
                    
                    <Title_Div>
                        <Title>
                        Repair services
                        </Title>
                    </Title_Div>

                </Hero_Title>

                <Description_Div>
                    <Description>
                        End-to-end IT lifecycle services provider
                        Procurement, deployment, 
                        Support, maintenance
                        Decommissioning, etc.
                    </Description>
                </Description_Div>
            </Col>


            <Col>
                <Hero_Title>
                    <Icon>
                    <Image src={icon3} alt="One-location repair shop icon" />
                    </Icon>
                    
                    <Title_Div>
                        <Title>
                            Carry-in daytime service
                        </Title>
                    </Title_Div>

                </Hero_Title>

                <Description_Div>
                    <Description>
                        Remote, Onsite, and carry-in
                        Services available 24x7
                        SLAs customized to client needs.
                    </Description>
                </Description_Div>
            </Col>

        </Row>
      </Container>
      </>
     
    )
}