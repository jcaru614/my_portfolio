import React from 'react'

const Button = (props) => {
    
    const btn = {
        padding: '2.5% 5%',
        borderRadius: '10px',
        border: '2px solid white',
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: '20px',
        left: '29%',
        color: 'white',
        textDecoration: 'none',
        boxShadow: '3px 3px whitesmoke',
    }
    
    return (
        <a className="btnhover" style={btn} href={props.link} target="blank">Check it out!</a>
    )
}

export default Button