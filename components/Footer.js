import styled from 'styled-components'
import {AiOutlineTwitter, AiFillYoutube, AiFillInstagram} from 'react-icons/ai';
import { CgPhone, CgFacebook } from 'react-icons/cg';
import {  FaMapMarkerAlt, FaEnvelopeOpenText } from 'react-icons/fa';
import {FiCodesandbox} from 'react-icons/fi';
import Link from 'next/link'
import Image from 'next/image'
import Footer_background from '../components/images/footer_background.jpg'

const Footer_div = styled.div`
    margin-top: 100px;
    width: 100%;
    height: 100%;
    position: relative;
`

const FooterBackground = styled.div`
    position: absolute;
    width: 100%;
    width: 100%;
    top: 0;
    bottom: 0;
    z-index: -1;
`

const Bottom_Footer = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    border-top: 1px solid #1C2354;
`

const CopyRight = styled.div``

const Privacy_Terms = styled.div``

const FooterText = styled.div`
    color: #ffffff;
    font-size: 14px;
`
const Top_Footer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Top_Row = styled.div`
    width: 100%;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Top_Col = styled.div`
    width: 25%;
    font-weight: 900;
    font-size: 25px;
    text-align: center;
    margin: 10px;
    height: 300px;
`
const Logo = styled.div`
    color: #fff;
`
const Description = styled.h3`
    font-weight: 500;
    font-size: 18px;
    color: #FFFFFF;
`
const Icon_Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`
const Icon = styled.div`
    color: #FFFFFF;
    background: rgba(108, 117, 125, 0.2);
    border-radius: 2px;
    padding: 0px 8px 0px 8px;
    margin: 5px;
    cursor: pointer;
    &:hover{
        transform: translateY(-3px);
        background: #E21F36;
    }
`

const Top_Title_Div = styled.div`
    width: 100%;
    border-bottom: 2px solid #1C2354;
    margin-bottom: 18px;
`
const Top_Title = styled.h2`
    color: #ffffff;
    font-weight: 700;
    font-size: 20px;
    text-align: left;
`
const FooterLinkItems = styled.div`
    display: flex;
    margin-bottom: 15px;
`
const Left_Icon = styled.div`
    color: #E21F36;
    margin-right: 15px;
`
const Text = styled.p`
    font-weight: 500;
    font-size: 18px;
    color: #FFFFFF;
    text-align: left;
`
const StyledLink = styled.a`
    font-weight: 500;
    font-size: 18px;
    color: #FFFFFF;
    text-align: left;
`

function Footer() {
    var linebreak = '\n';
    return (
        <Footer_div>
            <FooterBackground>
                <Image src={Footer_background} alt="Moderntech footer background" />
            </FooterBackground>
            
            <Top_Footer>
                <Top_Row>
                    <Top_Col>
                        <Logo>LOGO</Logo>
                        <Description>
                            A highly-competent computer company, we aim to offer you the most advanced solution with no compromises and employing only the best technically-skilled 
                            field engineers to give only the most satisfying service to our clients.
                        </Description>

                        <Icon_Div>
                            
                            <Icon>
                                <Link href="/" passHref>
                                    <StyledLink><CgFacebook/></StyledLink>
                                </Link>
                            </Icon>

                            <Icon>
                                <Link href="/" passHref>
                                    <StyledLink><AiOutlineTwitter/></StyledLink>
                                </Link>
                            </Icon>

                            <Icon>
                                <Link href="/" passHref>
                                    <StyledLink><AiFillYoutube/></StyledLink>
                                </Link>
                            </Icon>

                            <Icon>
                                <Link href="/" passHref>
                                    <StyledLink><AiFillInstagram/></StyledLink>
                                </Link>
                            </Icon>

                        </Icon_Div>
                    </Top_Col>

                    <Top_Col>
                        <Top_Title_Div>
                        <Top_Title>Address</Top_Title>
                        </Top_Title_Div>

                        <FooterLinkItems>
                            <Left_Icon><FaMapMarkerAlt/></Left_Icon>
                            <Text>2nd Floor, Bellisima Building, Pacita Ave., Pacita Complex I, San Pedro Laguna 4023</Text>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <Left_Icon><FaEnvelopeOpenText/></Left_Icon>
                            <Text>sales@mcsi.ph <br />
                            mcsi-helpdesk@mcsi.ph </Text>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <Left_Icon><CgPhone/></Left_Icon>
                            <Text>(02) 8808-79-23 to 24 <br /> 
                            (02) 8808 79-24</Text>
                        </FooterLinkItems>
                    </Top_Col>

                    <Top_Col>
                        <Top_Title_Div>
                        <Top_Title>Quick Links</Top_Title>
                        </Top_Title_Div>

                        <FooterLinkItems>
                            <Left_Icon><FiCodesandbox/></Left_Icon>
                            <Link href="/" passHref>
                                <StyledLink>Home</StyledLink>
                            </Link>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <Left_Icon><FiCodesandbox/></Left_Icon>
                            <Link href="/" passHref>
                                <StyledLink>About</StyledLink>
                            </Link>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <Left_Icon><FiCodesandbox/></Left_Icon>
                            <Link href="/" passHref>
                                <StyledLink>Services</StyledLink>
                            </Link>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <Left_Icon><FiCodesandbox/></Left_Icon>
                            <Link href="/" passHref>
                                <StyledLink>Careers</StyledLink>
                            </Link>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <Left_Icon><FiCodesandbox/></Left_Icon>
                            <Link href="/" passHref>
                                <StyledLink>Contact Us</StyledLink>
                            </Link>
                        </FooterLinkItems>
                    </Top_Col>

                    <Top_Col>
                        <Top_Title_Div>
                        <Top_Title>Legal</Top_Title>
                        </Top_Title_Div>

                        <FooterLinkItems>
                            <Left_Icon><FiCodesandbox/></Left_Icon>
                            <Link href="/" passHref>
                                <StyledLink>Terms and Conditions</StyledLink>
                            </Link>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <Left_Icon><FiCodesandbox/></Left_Icon>
                            <Link href="/" passHref>
                                <StyledLink>Privacy Policy</StyledLink>
                            </Link>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <Left_Icon><FiCodesandbox/></Left_Icon>
                            <Link href="/" passHref>
                                <StyledLink>Terms of use</StyledLink>
                            </Link>
                        </FooterLinkItems>
                    </Top_Col>

                </Top_Row>
            </Top_Footer>

            <Bottom_Footer>
            <CopyRight>
                <FooterText>Copyright © 2021 Moderntech</FooterText>
            </CopyRight>

            <Privacy_Terms>
                <FooterText>Privacy Policy Terms & Conditions</FooterText>
            </Privacy_Terms>
            </Bottom_Footer>

        </Footer_div>
    )
}

export default Footer
