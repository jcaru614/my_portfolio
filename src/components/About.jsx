import React from 'react'
import Traits from './Traits'
import hardworking from '../images/hardwork.png'
import efficient from '../images/efficient.png'
import motivated from '../images/motivated.png'
import stars from '../images/stars.jpg'
import ScrollAnimation from 'react-animate-on-scroll';

const About = () => {

    const background = {
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url(${stars})`,
    }
    
    return (
        <div id="about" style={background} >
            <div>
                <ScrollAnimation delay={500} animateIn='fadeIn'>
                    <h1>Hi I'm Joey</h1>
                    <p>I am a full stack web developer, with a passion for designing and building products with simplicity and funcionality in mind. I started learning front-end technologies in November 2019 and Joined a Full Stack bootcamp in January 2020. </p>
                </ScrollAnimation>

                <div className="traits">    
                    <Traits 
                        time="1000"
                        image={hardworking}
                        trait="Hardworking"
                    />
                    <Traits 
                        time="2000"
                        image={efficient}
                        trait="Efficient"
                    />
                    <Traits 
                        time="3000"
                        image={motivated}
                        trait="Motivated"
                    />
                </div>
            </div>
        </div>
    )
}

export default About
