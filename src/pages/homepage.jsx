import { useState } from 'react'
import Navbar from '../components/landingPage/navbar'
import HeroSection from '../components/landingPage/hero'
import ServiceCards from '../components/landingPage/cards'
import AboutUsSection from '../components/landingPage/about'
import WhyChooseUsSection from '../components/landingPage/whyus'
import ProcessSection from '../components/landingPage/process'
import Footer from '../components/landingPage/footer'
import Pricing from '../components/landingPage/pricing'


const Home = ({ showHeroImage }) => {
  return (
     <>
     <Navbar/>
     <HeroSection showHeroImage={showHeroImage} />
   <ServiceCards/>
   <AboutUsSection/>
   <WhyChooseUsSection/>
   <Pricing/>
   <ProcessSection/>
   <Footer/>
   </>
  )
}

export default Home
