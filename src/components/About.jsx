import React from 'react'
import hardworking from '../images/hardwork.png'
import efficient from '../images/efficient.png'
import motivated from '../images/motivated.png'
import stars from '../images/stars.jpg'
import ScrollAnimation from 'react-animate-on-scroll';
import AboutCard from './AboutCard'

const About = () => {
    
    return (
        <div id="about" >
            <AboutCard 
                img={hardworking}
                title='Hardworking'
                content="In progress"
            />
            <AboutCard 
                img={efficient}
                title='Efficient'
                content="In progress"
            />
            <AboutCard 
                img={motivated}
                title='Motivated'
                content="In progress"
            />
        </div>
    )
}

export default About
