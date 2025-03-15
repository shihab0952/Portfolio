import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import About from './component/About'
import Services from './component/Services'
import Work from './component/Work'
import Company from './component/Company'
 import Contact from './component/Contact'
 import Footer from './Footer'



const App = () => {
  return (
    
    <div >
    <Navbar />
    <Hero/>
    <About/>
    <Services/>
    <Work/>
    <Company/>
    <Contact/>
   <Footer/>
    </div>
  )
}

export default App
