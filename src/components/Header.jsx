import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import MenuIcon from '@material-ui/icons/Menu';
import me from '../images/me.jpg'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import GetAppIcon from '@material-ui/icons/GetApp';
import resume from '../resume/JosephCaruanaResume.docx'

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      <img src={me} className="me2" alt="" />
      <CSSTransition
        in={ isNavVisible}
        timeout={350}
        classNames="Animation" unmountOnExit>
        <nav className="head">
          <a href="#about">About</a>
          <a href="#skills-container">Skills</a>
          <a href="#projects">Projects</a>
          <a href={resume} download>Resume <GetAppIcon /></a>
          <div>
            <a href="mailto:jcaruana614@gmail.com" target="blank"><EmailIcon className="public" /></a>
            <a href="https://www.linkedin.com/in/joseph-caruana/" target="blank"><LinkedInIcon className="public" /></a>
            <a href="https://github.com/jcaru614" target="blank"><GitHubIcon className="public" /></a>
          </div>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger"> <MenuIcon /> </button>
    </header>
  );
}
