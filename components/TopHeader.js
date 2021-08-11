import styled from "styled-components"
import { CgPhone, CgFacebook } from 'react-icons/cg';
import {AiOutlineTwitter, AiFillYoutube, AiFillInstagram} from 'react-icons/ai';

const TopHead = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
`

const Contact_div = styled.div`
    display: flex;
    align-items: center;
`
const Phone_icon = styled.div`
    font-size: 25px;
    margin-top: 7px;
    color: #ffffff;
`

const Phone_Number = styled.h3`
    color: #ffffff;
`

const Icons_div= styled.div`
    display: flex;
`

const Icon= styled.div`
    font-size: 25px;
    margin-right: 10px;
    color: #ffffff;
`

function TopHeader() {
    return (
        <TopHead>
            <Contact_div>
                <Phone_icon> <CgPhone/> </Phone_icon>
                <Phone_Number>(02) 8808-79-23 to 24</Phone_Number>
            </Contact_div>

            <Icons_div>
                <Icon> <CgFacebook/> </Icon>
                <Icon> <AiOutlineTwitter/> </Icon>
                <Icon> <AiFillYoutube/> </Icon>
                <Icon> <AiFillInstagram/> </Icon>
            </Icons_div>

        </TopHead>
    )
}

export default TopHeader
