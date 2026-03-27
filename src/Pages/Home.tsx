import React from 'react'
import Hero from '../Components/Home/Hero'
import LookingFor from '../Components/Home/LookingFor'
import Courses from '../Components/Home/Courses'
import CollegeSection from '../Components/Home/CollegeSection'
import Partners from '../Components/Home/Partners'
import WhyChooseUs from '../Components/Home/WhyChooseUs'
import FAQ from '../Components/Home/FAQ'
import HomeCTA from '../Components/Home/HomeCTA'
const Home = () => {
  return (
    <div>
      <Hero/>
      <LookingFor/>
      <Courses/>
      <CollegeSection/>
      <Partners/>
      <WhyChooseUs/>
      <FAQ/>
      <HomeCTA/>
    </div>
  )
}

export default Home
