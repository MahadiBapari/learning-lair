import AboutInfo from "../Components/AboutInfo/AboutInfo"
import FocusedCurriculum from "../Components/FocusedCurriculum/FocusedCurriculum"
import AboutLesson from "../Components/AboutLesson/AboutLesson"
import FeaturedTutors from "../Components/FeaturedTutors/FeaturedTutors"

const About = () => {
  return (
    <div className="About">
        <AboutInfo/>
        <FocusedCurriculum/>
        <AboutLesson/>
        <FeaturedTutors/>
    </div>
    
  )
}

export default About