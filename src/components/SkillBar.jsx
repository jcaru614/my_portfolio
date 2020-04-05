import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
const SkillBar = (props) => {
    return (
        <ScrollAnimation animateIn='flipInX' delay={200}>
        <div className="outer">
        <img className="skilllogo" src={props.logo} alt=""/>
            <div className="inner" style={{ width: props.width, height: '25px', backgroundColor: 'rgb(255, 187, 0)', borderRadius: '5px' }}>
                <div style={{ padding: '3px', height: '19px', width: '75px', backgroundColor: 'yellow', borderRadius: '5px 0px 0px 5px' }}>{props.lang}</div>
                <p style={{ top: '0', left: '90%', padding: '3px' }}>{props.perc}</p>
            </div>
        </div>
        </ScrollAnimation>
    )
}

export default SkillBar
