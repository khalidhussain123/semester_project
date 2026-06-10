import React from 'react'
import NavBar from './Components/NavBar'
import Banner from './Components/Banner'
import Wcu from './Components/Wcu'
import Mot from './Components/Mot'
import Pricing from './Components/Pricing'
import YourOpinion from './Components/YourOpinion'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

export default function App() {
  return (
    <>
      <NavBar/>
      <Banner/>
      <Wcu />
      <Mot/>
      <Pricing />     
      <YourOpinion />
      <Contact />
      <Footer />
    </>
  )
}


