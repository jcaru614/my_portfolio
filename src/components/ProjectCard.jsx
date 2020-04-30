import React from 'react'
import Button from './Button'

const Card = (props) => {

  return (
    <a href={props.link} target="blank">
      <div className="card">
        <h2>{props.title}</h2>
        <div className="imgstyle"><img className="projimg" src={props.image} alt="" /></div>
        <p>{props.description}</p>
        <Button link={props.link} target="blank" left="29%"/>
        {props.icons ? <div className="iconsContainer">
          {props.icons ? props.icons.map((item, i) => (
            <img className="iconflip"  key={i} src={item} alt="" />
          )) : null}
        </div> : null}
      </div>
    </a>
  )
}

export default Card