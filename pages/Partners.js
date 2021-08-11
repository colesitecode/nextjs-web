import styled from "styled-components"
import Image from 'next/image'
import logo1 from '../components/images/logo1.png'
import logo2 from '../components/images/logo2.png'
import logo3 from '../components/images/logo3.png'
import logo4 from '../components/images/logo4.png'

const Partners_Div = styled.div`
    width: 100%;
    margin-top: 100px;
`

const Title = styled.h2`
    text-align: center;
    margin-bottom: 30px;
`

const Logo_Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Logo = styled.div`
    margin: 50px;
`


export default function Partners() {
    return (
        <Partners_Div>
            <Title>Our Business Partners</Title>

            <Logo_Div>
                <Logo><Image src={logo1} alt="Moderntech partners" /></Logo>
                <Logo><Image src={logo2} alt="Moderntech partners" /></Logo>
                <Logo><Image src={logo3} alt="Moderntech partners" /></Logo>
                <Logo><Image src={logo4} alt="Moderntech partners" /></Logo>
            </Logo_Div>


        </Partners_Div>
    )
}
  