import React from 'react'
import Button from './Button'
// import { Media } from 'react-bootstrap';


const Card = (props) => {
  console.log("props", props.icons);

  function media() {
    if (window.screen.availWidth > 621) {
      return '300px'
    }
    if (window.screen.availWidth < 621) {
      return '230px'
    }
  }

  const cardStyle = {
    backgroundColor: "rgb(27,35,46)",
    color: 'white',
    width: media(),
    height: '450px',
    margin: '3%',
    textAlign: 'center',
    display: 'inline-block',
    borderRadius: '10px',
    verticalAlign: 'top',
    position: 'relative',
    boxShadow: '20px 30px 20px rgb(138, 137, 137)',
    padding: '10px',
    position: 'relative',
    marginBottom: '50px',
  };

  const margText = {
    padding: '10px'
  }

  const imageStyle = {
    width: media(),
    height: '180px',
    backgroundColor: 'white',
    borderRadius: '5px',
    display: 'block',
    overflow: 'scroll',

  };

  const iconsContainer = {
    position: 'absolute',
    bottom: '65px',
    left: '1%',
    right: '1%'
  }

  const iconStyle = {
    width: '15%',
    height: '15%',
    padding: '5px',
  }

  return (
    <a href={props.link} target="blank">
      <div style={cardStyle} className="card">
        <h2 style={margText}>{props.title}</h2>
        <div style={imageStyle}><img className="projimg" src={props.image} alt="" /></div>
        <p style={margText}>{props.description}</p>
        <Button link={props.link} target="blank" />
        {props.icons ? <div style={iconsContainer}>
          {props.icons ? props.icons.map((item, i) => (

            <img className="iconflip" style={iconStyle} key={i} src={item} alt="" />

          )) : null}
        </div> : null}
      </div>
    </a>
  )
}

export default Card