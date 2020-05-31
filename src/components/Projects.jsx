import React from 'react'
import Card from './ProjectCard'
import javascript from '../images/javascript.png'
import python from "../images/python.png"
import django from "../images/django.png"
import mysql from "../images/mysql.png"
import mongo from '../images/mongo.png'
import express from '../images/express.png'
import react from '../images/react.png'
import nodejs from '../images/nodejs.png'
import figma from '../images/figma.png'
import typescript from '../images/typescript.png'
// spotback
import spotback1 from '../images/spotback1.png'
import spotback2 from '../images/spotback2.png'
import spotback3 from '../images/spotback3.png'
// cinebox
import cinebox1 from '../images/cinebox1.png'
import cinebox2 from '../images/cinebox2.png'
import cinebox3 from '../images/cinebox3.png'
// eventune
import eventune1 from '../images/eventune1.png'
import eventune2 from '../images/eventune2.png'
import eventune3 from '../images/eventune3.png'
// thekeep
import theKeep1 from '../images/theKeep1.png'
import theKeep2 from '../images/theKeep2.png'
import theKeep3 from '../images/theKeep3.png'

const Projects = (props) => {
    console.log(props);

    const icons1 = [javascript, python, django, mysql];
    const icons2 = [mongo, express, react, nodejs];
    const icons3 = [typescript, mongo, express, nodejs, figma]
    const icons4 = [react, python, django, mysql];


    return (
        <div id="projects">
            <h1>Projects</h1>
            <Card
                title='Spotback'
                image1={spotback1}
                image2={spotback2}
                image3={spotback3}
                description='An IOS parking platform that matches users based on eta and distance to destination so that they arrive to the parked car simultaneously.'
                link="http://spotbackapp.com/"
                icons={icons3}

            />
            <Card
                title='Cinebox'
                image1={cinebox1}
                image2={cinebox2}
                image3={cinebox3}
                description='A React Native movie rating app that allows you to create and rate movies as well as search the for the movie you want.'
                link="https://www.youtube.com/watch?v=ihZetI2keKQ&feature=youtu.be"
                icons={icons4}

            />
            <Card
                title='Eventune'
                image1={eventune1}
                image2={eventune2}
                image3={eventune3}
                description='Find the latest events and concerts! Eventune uses a Ticket Master API to provide event details based on city or keyword search.'
                link="http://34.219.65.78/"
                icons={icons1}
            />
            <Card
                title='The Keep'
                image1={theKeep1}
                image2={theKeep2}
                image3={theKeep3}
                description='Keep track of all your personal tasks and notes through a clean and simple UI that is fully secured and authenticated.'
                link="http://54.212.5.18/"
                icons={icons2}
            />
        </div>
    )
}

export default Projects
