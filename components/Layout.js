import NavBar from './NavBar'
import Footer from './Footer'
import TopHeader from './TopHeader'
import GlobalStyles from '../styles/GlobalStyle'


export default function Layout({children}){
    return(
    
        <>
            <GlobalStyles/>
            <main>{children}</main>
            <Footer/>
        </>
    )
}