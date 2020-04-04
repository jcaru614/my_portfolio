import React from 'react'
import SkillBar from './SkillBar'
import html from "../images/html.png"
import css from "../images/css.png"
import javascript from "../images/javascript.png"
import python from "../images/python.png"
import django from "../images/django.png"
import express from '../images/express.png'
import react from '../images/react.png'
import nodejs from '../images/nodejs.png'
import figma from '../images/figma.png'

const Skills = () => {
    return (
        <div id="skills-container">
            <div className="skills">
                <h1>Skills</h1>
                    <SkillBar
                        logo={html}
                        width='70%'
                        lang="HTML"
                        perc="70%"
                    />
                    <SkillBar
                        logo={css}
                        width='70%'
                        lang="CSS"
                        perc="70%"
                    />
                    <SkillBar
                        logo={javascript}
                        width='65%'
                        lang="Javascript"
                        perc="65%"
                    />
                    <SkillBar
                        logo={react}
                        width='65%'
                        lang="React"
                        perc="65%"
                    />
                    <SkillBar
                        logo={python}
                        width='60%'
                        lang="Python"
                        perc="60%"
                    />
                    <SkillBar
                        logo={django}
                        width='60%'
                        lang="Django"
                        perc="60%"
                    />
                    <SkillBar
                        logo={nodejs}
                        width='60%'
                        lang="Node.JS"
                        perc="60%"
                    />
                    <SkillBar
                        logo={express}
                        width='60%'
                        lang="Express"
                        perc="60%"
                    />
                    <SkillBar
                        logo={figma}
                        width='55%'
                        lang="Figma"
                        perc="55%"
                    />
            </div>
        </div>

    )
}

export default Skills
