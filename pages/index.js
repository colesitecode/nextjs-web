import React from 'react'
import Hero from '../pages/Hero'
import About from '../pages/about'
import Services from '../pages/Services'
import GlobalStyles from '../styles/GlobalStyle'
import Footer from '../components/Footer'
import Solution from './Solution'
import Partners from './Partners'
import Newsletter from './Newsletter'

export default function Home() {
  return (
    <>
        <GlobalStyles />
        <Hero />
        <About/>
        <Services/>
        <Solution />
        <Partners/>
        <Newsletter/>
        <Footer/>
    </>
  )
}
