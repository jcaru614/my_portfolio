import React from 'react';
import Card from './ProjectCard';
// icons
import jquery from '../images/jquery.png';
import python from "../images/python.png";
import django from "../images/django.png";
import mysql from "../images/mysql.png";
import postgresql from "../images/postgresql.png";
import mongo from '../images/mongo.png';
import express from '../images/express.png';
import react from '../images/react.png';
import nodejs from '../images/nodejs.png';
import figma from '../images/figma.png';
import typescript from '../images/typescript.png';
// spotback
import spotback1 from '../images/spotback1.png';
import spotback2 from '../images/spotback2.png';
import spotback3 from '../images/spotback3.png';
import spotback4 from '../images/spotback4.png';
// cinebox
import cinebox1 from '../images/cinebox1.png';
import cinebox2 from '../images/cinebox2.png';
import cinebox3 from '../images/cinebox3.png';
// eventune
import eventune1 from '../images/eventune1.png';
import eventune2 from '../images/eventune2.png';
import eventune3 from '../images/eventune3.png';
import eventune4 from '../images/eventune4.png';
// thekeep
import theKeep1 from '../images/theKeep1.png';
import theKeep2 from '../images/theKeep2.png';
import theKeep3 from '../images/theKeep3.png';

// newMonday
import newMonday1 from '../images/newMonday1.png'
import newMonday2 from '../images/newMonday2.png'
import newMonday3 from '../images/newMonday3.png'
import newMonday4 from '../images/newMonday4.png'
import newMonday5 from '../images/newMonday5.png'

const Projects = (props) => {
    //  project images
    const images1 = [spotback1, spotback2, spotback3, spotback4];
    const images2 = [cinebox1, cinebox2, cinebox3];
    const images3 = [eventune1, eventune2, eventune3, eventune4]
    const images4 = [theKeep1, theKeep2, theKeep3];
    const images5 = [newMonday1, newMonday2, newMonday3, newMonday4, newMonday5];
    // icons
    const icons1 = [typescript, mongo, express, nodejs, figma]
    const icons2 = [react, python, django, mysql];
    const icons3 = [python, django, jquery, postgresql];
    const icons4 = [mongo, express, react, nodejs];
    const icons5 = [typescript, mongo, express, react, nodejs];


    return (
        <div id="projects">
            <h1>Projects</h1>
            <Card
                title='Spotback'
                images={images1}
                description='An IOS parking platform that matches users based on eta and distance to destination so that they arrive to the parked car simultaneously.'
                link="http://spotbackapp.com/"
                icons={icons1}

            />
            <Card
                title='NewMonday.com'
                images={images5}
                description='A project management style app that allows users to create tasks on story board and drag and drop to change position and stage.'
                link="https://youtu.be/KpVJywmQEp0/"
                icons={icons5}

            />
            <Card
                title='Cinebox'
                images={images2}
                description='A React Native movie rating app that allows you to create and rate movies as well as search the for the movie you want.'
                link="https://www.youtube.com/watch?v=ihZetI2keKQ&feature=youtu.be"
                icons={icons2}

            />
            <Card
                title='Eventune'
                images={images3}
                description='Find the latest events and concerts! Eventune uses a Ticket Master API to provide event details based on city or keyword search.'
                link="http://eventune.herokuapp.com/"
                icons={icons3}
            />
            <Card
                title='The Keep'
                images={images4}
                description='Keep track of all your personal tasks and notes through a clean and simple UI that is fully secured and authenticated.'
                link="https://thekeepapp.herokuapp.com/"
                icons={icons4}
            />
        </div>
    )
}

export default Projects
