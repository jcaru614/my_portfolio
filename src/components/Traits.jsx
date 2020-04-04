import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

const Traits = (props) => {
    return (
        <ScrollAnimation delay={props.time} animateIn='tada' initiallyVisible={true}>
            <div>
                <img src={props.image} alt="" />
                <p>{props.trait}</p>
            </div>
        </ScrollAnimation>
    )
}

export default Traits
