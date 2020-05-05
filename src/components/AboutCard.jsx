import React from 'react';
import { Breakpoint } from 'react-socks';
import ScrollAnimation from 'react-animate-on-scroll';

function AboutCard(props) {

    return (
        <ScrollAnimation animateIn='flipInY' animateOut='fadeOut' delay={200} duration={2} style={{display: 'inline-block'}} >
            <div style={noExtraSpace.smallerView}>
                <Breakpoint customQuery="(min-width: 621px)" style={noExtraSpace.generalView}>
                    <div style={theContainer.generalView}>
                    <ScrollAnimation delay={props.time} animateIn='tada' initiallyVisible={true} >
                        <img style={images} src={props.img} alt={props.alt} />
                        </ScrollAnimation>
                        <h2>{props.title}</h2>
                        <p style={text.generalView}>{props.content}</p>
                    </div>
                </Breakpoint>
                <Breakpoint customQuery="(max-width: 620px)" style={noExtraSpace.smallerView}>
                    <div style={theContainer.smallerView}>
                        <img style={images} src={props.img} alt={props.alt} />
                        <h2>{props.title}</h2>
                        <p style={text.smallerView}>{props.content}</p>
                    </div>
                </Breakpoint>
            </div>
            </ScrollAnimation>
        

    );
}

const theContainer = {
    generalView: {
        display: 'inline-block',
        padding: '15px 5px',
        marginRight: '5px',
        width: '230px',
        height: '330px',
        backgroundColor: 'rgb(27,35,46)',
        borderRadius: '40px 10px 40px 10px',
        verticalAlign: 'top',
        textAlign: 'center',
        zIndex: '-1'
    },
    smallerView: {
        display: 'inline-block',
        padding: '20px 2px 0',
        margin: '15px',
        width: '200px',
        height: '310px',
        backgroundColor: 'rgb(27,35,46)',
        borderRadius: '5px 40px 5px 40px',
        verticalAlign: 'top',
        textAlign: 'center',
        zIndex: '-1'
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

const images = {
    padding: '5px',
    borderRadius: '10%',
    backgroundColor: '#E5ECF4',
    height: '80px',
    marginBottom: '10px',
    zIndex: '-1'

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

export default AboutCard;