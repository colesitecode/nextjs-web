import Image from 'next/image'
import styled from 'styled-components'
import Message_icon from '../components/images/message.png'

const Newsletter_Div = styled.div`
    border-radius: 5px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Newsletter_Container = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #F0F0FA;
    padding: 30px;
`

const MessageIcon = styled.div`
    margin-right: 20px;
`

const NewsletterText = styled.div`
    margin-right: 20px;
`

const Title = styled.h2``

const Description = styled.h3``

const Subscription = styled.div`
`

const Input = styled.input`
    background: #FFFFFF;
    border-radius: 5px 0px 0px 5px;
    border: none;
    width: 300px;
    height: 40px;
`

const Subscribe_BTN = styled.button`
    background: #E21F36;
    color: #FFFFFF;
    border-radius: 0 5px 5px 0;
    border: none;
    height: 40px;
    padding-left: 15px;
    padding-right: 15px;
    font-weight: 600;
    font-size: 15px;
`

export default function Newsletter() {
    return (

        <Newsletter_Div>
            
            <Newsletter_Container>

            <MessageIcon>
                <Image src={Message_icon} alt="Message Moderntech" />
            </MessageIcon>

            <NewsletterText>
                <Title>Sign up for newsletter</Title>
                <Description>Subscribe to the newsletter for all the latest updates</Description>
            </NewsletterText>

            <Subscription>
                <Input></Input>
                <Subscribe_BTN>Subscribe</Subscribe_BTN>
            </Subscription>

            </Newsletter_Container>

        </Newsletter_Div>
    )
}
  