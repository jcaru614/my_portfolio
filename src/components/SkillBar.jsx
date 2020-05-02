import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
const SkillBar = (props) => {
    return (
        <ScrollAnimation animateIn='flipInX' animateOut='fadeOut' delay={200} duration={2} className="outer">
            <div style={{ width: '75%', height: '25px', margin: '15px 0px', borderRadius: '5px', border: '1px solid black', backgroundColor: '#E5ECF4' }}>
                <img style={{position: 'absolute', width: '25px', marginLeft: '-30px', marginBottom: '-5px'}} src={props.logo} alt="" />
                <div style={{ width: props.perc, height: '25px', backgroundColor: '#FFBA08', borderRadius: '5px', position: 'relative' }}>
                    <div style={{ padding: '3px', height: '19px', width: '75px', backgroundColor: '#FDE12D', borderRadius: '5px 0px 0px 5px' }}>{props.lang}</div>
                    <p style={{ top: '0', left: '90%', padding: '3px', position: 'absolute' }}>{props.perc}</p>
                </div>
            </div>
        </ScrollAnimation>
    )
}

export default SkillBar
