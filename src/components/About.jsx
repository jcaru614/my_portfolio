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
            <p>I am a full-stack web developer, with a passion for designing and building
            products with simplicity and functionality in mind. I devote myself full-time to learning every single day.</p>
            <AboutCard
                img={hardworking}
                time={800}
                title='Hardworking'
                content="I'm a hard worker and like to put in as much effort as possible to perfecting my projects."
            />
            <AboutCard
                img={efficient}
                time={1200}
                title='Efficient'
                content="Finding the fastest and most precise way of completing a project or task with out compromising is my goal."
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
