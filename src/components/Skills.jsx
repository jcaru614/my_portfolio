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
                        lang="HTML"
                        perc="75%"
                    />
                    <SkillBar
                        logo={css}
                        lang="CSS"
                        perc="75%"
                    />
                    <SkillBar
                        logo={javascript}
                        lang="Javascript"
                        perc="70%"
                    />
                    <SkillBar
                        logo={react}
                        lang="React"
                        perc="70%"
                    />
                    <SkillBar
                        logo={python}
                        lang="Python"
                        perc="70%"
                    />
                    <SkillBar
                        logo={django}
                        lang="Django"
                        perc="70%"
                    />
                    <SkillBar
                        logo={nodejs}
                        lang="Node.JS"
                        perc="65%"
                    />
                    <SkillBar
                        logo={express}
                        lang="Express"
                        perc="65%"
                    />
                    <SkillBar
                        logo={figma}
                        lang="Figma"
                        perc="55%"
                    />
            </div>
        </div>

    )
}

export default Skills
