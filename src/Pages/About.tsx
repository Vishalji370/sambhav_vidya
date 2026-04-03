import React from 'react'
import AboutHero from '../Components/About/AboutHero'
import MissionVision from '../Components/About/MissionVision'
import HomeCTA from '../Components/Home/HomeCTA'
import Aboutus from '../Components/About/Aboutus'
import WhatWeDo from '../Components/About/WhatWeDo'
import OurApproch from '../Components/About/OurApproch'
import WhoWeServe from '../Components/About/WhoWeServe'
import Ouerbelive from '../Components/About/Ouerbelive'
import OurPromis from '../Components/About/OurPromis'


const About = () => {
  return (
    <div>
     <AboutHero />
     <Aboutus/>
     <WhatWeDo/>
     <OurApproch/>
     <MissionVision />
     <WhoWeServe/>
     <Ouerbelive/>
     <OurPromis/>
     <HomeCTA/>
    </div>
  )
}

export default About
