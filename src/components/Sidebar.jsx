import React from 'react'
import me from '../images/me.jpg'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import GetAppIcon from '@material-ui/icons/GetApp';
import resume from '../resume/JosephCaruanaResume.docx'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <img className="me" src={me} alt="" />
            <a className="sidetxt" href="#about"><p>About</p></a>
            <a className="sidetxt" href="#skills-container"><p>Skills</p></a>
            <a className="sidetxt" href="#projects"><p>Projects</p></a>

            <a className="download" href={resume} download>Resume <GetAppIcon /></a>
            <p>GET IN TOUCH</p>
            <a href="mailto:jcaruana614@gmail.com" target="blank"><EmailIcon className="public" /></a>
            <a href="https://www.linkedin.com/in/joseph-caruana/" target="blank"><LinkedInIcon className="public" /></a>
            <a href="https://github.com/jcaru614" target="blank"><GitHubIcon className="public" /></a>
        </div>

    )
}

export default Sidebar
