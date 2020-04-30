import React from 'react'
import hardworking from '../images/hardwork.png'
import efficient from '../images/efficient.png'
import motivated from '../images/motivated.png'
import learner from '../images/learner.png'

import AboutCard from './AboutCard'

const About = () => {
    
    return (
        <div id="about" >
         <h1>About</h1>
            <AboutCard 
                img={hardworking}
                time={800}
                title='Hardworking'
                content="I'm a hard worker and like to put in as much time as possible to perfecting my projects."
            />
            <AboutCard 
                img={efficient}
                time={1200}
                title='Efficient'
                content="Finding the fastest, most precise way of completing a project or task with out compromising is my goal."
            />
            <AboutCard 
                img={learner}
                time={1600}
                title='Learner'
                content="I enjoy learning new things and applying those concepts to what I am working on."
            />
            <AboutCard 
                img={motivated}
                time={2000}
                title='Motivated'
                content="I am motivated to go above and beyond expectations. The bar is only the minimum."
            />
            
        </div>
    )
}

export default About
