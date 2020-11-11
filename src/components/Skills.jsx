import React from 'react';
import SkillBar from './SkillBar';
import html from "../images/html.png";
import css from "../images/css.png";
import javascript from "../images/javascript.png";
import typescript from '../images/typescript.png';
import python from "../images/python.png";
import django from "../images/django.png";
import express from '../images/express.png';
import react from '../images/react.png';
import redux from '../images/redux.png';
import reactNative from '../images/reactNative.png';
import nodejs from '../images/nodejs.png';
import figma from '../images/figma.png';

const Skills = () => {
    return (
        <div id="skills-container">
            <div className="skills">
                <h1>Skills</h1>
                <SkillBar
                    logo={react}
                    lang="React"
                    perc="85%"
                />
                <SkillBar
                    logo={reactNative}
                    lang="React Native"
                    perc="85%"
                />
                <SkillBar
                    logo={redux}
                    lang="Redux"
                    perc="80%"
                />
                <SkillBar
                    logo={typescript}
                    lang="Typescript"
                    perc="75%"
                />
                <SkillBar
                    logo={javascript}
                    lang="Javascript"
                    perc="85%"
                />
                <SkillBar
                    logo={html}
                    lang="HTML5"
                    perc="75%"
                />
                <SkillBar
                    logo={css}
                    lang="CSS3"
                    perc="75%"
                />
                <SkillBar
                    logo={nodejs}
                    lang="Node.js"
                    perc="75%"
                />
                <SkillBar
                    logo={express}
                    lang="Express"
                    perc="75%"
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
                    logo={figma}
                    lang="Figma"
                    perc="60%"
                />
            </div>
        </div>

    )
}

export default Skills
