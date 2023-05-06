import React from 'react'
import Hero from '../Components/Hero/Hero'
import Information from '../Components/Information/Information'
import Lesson from '../Components/Lesson/Lesson'
import Guarantee from '../Components/Guarantee/Guarantee'
import FeaturedTutors from '../Components/FeaturedTutors/FeaturedTutors'

const Home = () => {
  return (
    <div className="Home">
        
        <Hero/>
        <Information/>
        <Lesson/>
        <Guarantee/>
        <FeaturedTutors/>
        
    </div>
  )
}

export default Home