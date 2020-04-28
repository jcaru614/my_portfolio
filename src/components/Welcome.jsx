import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import Particles from 'react-particles-js'

const Welcome = () => {

    return (
        <div className='welcomContainer'>
            <div id="welcome">
            <ScrollAnimation delay={1000} animateIn='fadeIn'>
                <h1 >Hi I'm Joey</h1>
                <p >I am a full-stack web developer, with a passion for designing and building
                products with simplicity and functionality in mind. I started learning front-end and back-end
                  technologies in November 2019 and have continued to devote myself full-time to learning every single day.</p>
            </ScrollAnimation>
                <Particles
                    params={{
                        "particles": {
                            "number": {
                                "value": 300,
                                "density": {
                                    "enable": false
                                }
                            },
                            "size": {
                                "value": 1,
                                "random": true,
                                "anim": {
                                    "speed": 5,
                                    "size_min": 0.3
                                }
                            },
                            "line_linked": {
                                "enable": false
                            },
                            "move": {
                                "random": true,
                                "speed": 1,
                                "direction": "bottom",
                                "out_mode": "out"
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "bubble"
                                },
                                "onclick": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            },
                            "modes": {
                                "bubble": {
                                    "distance": 250,
                                    "duration": 2,
                                    "size": 0,
                                    "opacity": 0
                                },
                                "repulse": {
                                    "distance": 400,
                                    "duration": 4
                                }
                            }
                        }
                    }} />
            </div>
        </div>

    )
}

export default Welcome;
