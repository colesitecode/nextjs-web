import styled from "styled-components"
import Link from 'next/link'

const Nav = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 25px;
    padding-right: 25px;
`

const Logo = styled.div`
    font-size: 20px;
    color: #ffffff;
`

const NavMenu = styled.div`
    display: flex;
`

const NavLink = styled.h3`
    padding-left: 15px;
    font-size: 20px;

    a{
        color: #ffffff;
    }
`

const TopHeadBTN = styled.div``

const Button = styled.div`
    font-size: 20px;
    background-color: #e21f36;
    padding: 8px 15px 8px 15px;
    color: #ffffff;
`

function NavBar() {
    return (
        <Nav>
            <Logo>LOGO</Logo>

            <NavMenu>
                <NavLink>
                <Link href="/"><a>Home</a></Link>
                </NavLink>
                
                <NavLink>
                <Link href="/about"><a>About</a></Link>
                </NavLink>
                
                <NavLink>
                <Link href="/"><a>Services</a></Link>
                </NavLink>

                <NavLink>
                <Link href="/"><a>Coverage</a></Link>
                </NavLink>

                <NavLink>
                <Link href="/"><a>Careers</a></Link>
                </NavLink>

                <NavLink>
                <Link href="/"><a>Contact</a></Link>
                </NavLink>
            </NavMenu>

            <TopHeadBTN>
                <Button>Get a Quote</Button>
            </TopHeadBTN>
        </Nav>
    )
}

export default NavBar
