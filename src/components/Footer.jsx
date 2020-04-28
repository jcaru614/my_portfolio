import React from 'react';
import footer from '../images/footer3.jpeg'

function Footer() {

  const parent = {
    height: '280px',
    backgroundImage: `url(${footer})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }

  return (
    <div className="thefooter" style={parent}>
    </div>
  )
}

export default Footer;