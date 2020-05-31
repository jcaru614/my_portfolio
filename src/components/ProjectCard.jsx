import React from 'react'
import Zoom from 'react-reveal/Zoom';
import Slider from 'react-slick';

const Card = (props) => {


  const settings = {
    infinite: true,
    lazyLoad: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    dots: true,
  }

  return (
    <a href={props.link} target="blank">
      <div className="card">
        <h2>{props.title}</h2>
        <Zoom>
          <Slider {...settings} >
            <div className="imgstyle">
              <img className="projimg" src={props.image1} alt="" />
            </div>
            <div className="imgstyle">
              <img className="projimg" src={props.image2} alt="" />
            </div>
            <div className="imgstyle">
              <img className="projimg" src={props.image3} alt="" />
            </div>
          </Slider>
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