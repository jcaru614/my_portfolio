import React from 'react'
import Zoom from 'react-reveal/Zoom';

const Card = (props) => {

  return (
    <a href={props.link} target="blank">
    <div className="card">
      <h2>{props.title}</h2>
      <Zoom>
      <div className="imgstyle"><img className="projimg" src={props.image} alt="" /></div>
      </Zoom>
      <p>{props.description}</p>
      {<div className="iconsContainer">
        {props.icons.map((item, i) => (
          <img className="iconflip" key={i} src={item} alt="" />
        ))}
      </div>}
      <a className='btn2' href={props.link} target="blank">Check it out!</a>
    </div>
    </a>
  )
}

export default Card