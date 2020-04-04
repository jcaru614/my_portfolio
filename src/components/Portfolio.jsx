import React from 'react'
import Card from './ProjectCard'
import Eventune from '../images/eventune.png'
import TheKeep from '../images/theKeep.png'
import Spotback from '../images/spotback.png'
import html from "../images/html.png"
import css from "../images/css.png"
import javascript from '../images/javascript.png'
import python from "../images/python.png"
import django from "../images/django.png"
import mysql from "../images/mysql.png"
import mongo from '../images/mongo.png'
import express from '../images/express.png'
import react from '../images/react.png'
import nodejs from '../images/nodejs.png'
import figma from '../images/figma.png'

const Portfolio = (props) => {
    console.log(props);

    const icons1 = [javascript, python, django, mysql];
    const icons2 = [mongo,express,react, nodejs];
    const icons3 = [figma, html, css]

    return (
        <div id="projects">
                <h1>Projects</h1>
                <Card 
                title='Spotback' 
                image={Spotback}
                description='An IOS parking platform that matches users based on eta and distance to destination so that they arrive to the parked car simultaneously.'
                link="http://spotbackapp.com/"
                icons={icons3}
                />
                <Card
                title='Eventune' 
                image={Eventune}
                description='Find the latest events and concerts! Eventune uses a Ticket Master API to provide event details based on city or keyword search.'
                link="http://34.219.65.78/"
                icons= {icons1}
                />
                <Card 
                title='The Keep' 
                image={TheKeep}
                description='Keep track of all your personal tasks and notes through a clean and simple UI that is fully secured and authenticated.'
                link="http://54.212.5.18/"
                icons={icons2}
                />
        </div>
    )
}

export default Portfolio
