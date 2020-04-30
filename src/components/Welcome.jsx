import React from 'react';
import Particles from 'react-particles-js';

function Welcome1() {

    return (
        <div id="WelcomeContainer">
            <h1 className="welcome">Welcome!</h1>
            <h1 className="name">I'm Joey Caruana</h1>
            {/* <p className="text">I am a full-stack web developer, with a passion for designing and building
                products with simplicity and functionality in mind. I started learning front-end and back-end
                technologies in November 2019 and have continued to devote myself full-time to learning every single day.</p> */}
            <a className="link" href="#about"> <span className="welbtn">Click Here</span><span className="text"> to learn more about me</span></a>
            <div className="bg">
                <Particles
                    params={{
                        "particles": {
                            "number": {
                                "value": 500,
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

export default Welcome1;