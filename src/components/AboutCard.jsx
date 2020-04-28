import React from 'react';
import { Breakpoint } from 'react-socks';
import ScrollAnimation from 'react-animate-on-scroll';

function AboutCard(props) {
    const desContainer = {
        generalView: {
            display: 'inline-block',
            padding: '15px 5px',
            marginRight: '50px',
            width: '230px',
            height: '330px',
            backgroundColor: 'rgb(27,35,46)',
            borderRadius: '10px',
            verticalAlign: 'top',
            textAlign: 'center'
        },
        smallerView: {
            display: 'inline-block',
            padding: '20px 2px 0',
            margin: '15px',
            width: '200px',
            height: '310px',
            backgroundColor: 'rgb(27,35,46)',
            borderRadius: '10px',
            verticalAlign: 'top',
            textAlign: 'center'
        }

    }
    const text = {
        generalView: {
            fontSize: '20px',
            padding: '5px',
            color: 'white',
        },
        smallerView: {
            fontSize: '16px',
            padding: '5px',
            color: 'white',
        }
    }
    const title = {
        fontSize: '25px',
        padding: '5px',
        color: 'white',
    }
    const images = {
        padding: '5px',
        borderRadius: '10%',
        backgroundColor: '#555',
        height: '80px',
        marginBottom: '10px',
    }
    const noExtraSpace = {
        generalView: {
            padding: '0',
            margin: '60px 5px 0',
            display: 'inline-block',
        },
        smallerView: {
            padding: '0',
            display: 'inline-block',
        }
    }

    return (
        <ScrollAnimation delay={props.time} animateIn='tada' initiallyVisible={true} style={{display:'inline-block'}}>
            <div style={noExtraSpace.smallerView}>
                <Breakpoint customQuery="(min-width: 701px)" style={noExtraSpace.generalView}>
                    <div style={desContainer.generalView}>
                        <img style={images} src={props.img} alt={props.alt} />
                        <h3 style={title}>{props.title}</h3>
                        <p style={text.generalView}>{props.content}</p>
                    </div>
                </Breakpoint>
                <Breakpoint customQuery="(max-width: 700px)" style={noExtraSpace.smallerView}>
                    <div style={desContainer.smallerView}>
                        <img style={images} src={props.img} alt={props.alt} />
                        <h3 style={title}>{props.title}</h3>
                        <p style={text.smallerView}>{props.content}</p>
                    </div>
                </Breakpoint>
            </div>
        </ScrollAnimation>

    );
}

export default AboutCard;