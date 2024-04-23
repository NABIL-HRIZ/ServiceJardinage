import React from 'react'
import './home.css'
import MainSection from '../../components/mainSection/MainSection'
import HomePage from '../../components/homePage/HomePage'
import OurServices from '../../components/OurServices/OurServices'
import OurValue from '../../components/ourValue/OurValue'
import OurFaq from '../../components/ourFaq/OurFaq'
import TestImonials from '../../components/testimonials/TestImonials'
const Home = () => {
  return (
    <div>
      <HomePage />
      <OurServices />
      <OurValue />
      <OurFaq />
      <TestImonials />
    </div>
  )
}
export default Home

