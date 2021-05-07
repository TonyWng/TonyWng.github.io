import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../App.css';
import Music from '../Images/Music.png';
import Travel from '../Images/Travel.png';
import Volleyball from '../Images/Volleyball.png'

export default function About(props) {
    return (
        <Container style={{ marginTop: "75px" }} className="ContainerStyle">
            <Row>
                <Col>
                    <h1 className="HeaderTextMB">A Bit About Me</h1>
                    <h1 style={{ marginTop: "50px" }} className="AboutText">
                        Apart from coding, there are many things I enjoy doing in my free time. I strive daily to balance school/work with my interests and hobbies.
                        Feel free to read the following section if you're interested in learning more about me.
                    </h1>
                </Col>
            </Row>
            <Row style={{ marginTop: "40px" }}>
                <Col sm={6} >
                    <Image fluid rounded src={Music} />
                </Col>
                <Col sm={6}>
                    <h1 style={{ textAlign: "center" }} className="HeaderTextMB">Music</h1>
                    <h2 style={{ textAlign: "center" }} className="AboutDescript">
                        Music has always been a big part of my life. Growing up, I studied both the practical and theoretical aspects of music which has
                        helped me develop a special appreciation towards music. Although I no longer take formal classes, I continue to push my learning through
                        playing the piano and acoustic guitar. I recently picked up a Fender Telecaster and have begun a new journey in the world of electric guitars.
                    </h2>
                </Col>
            </Row>
            <Row style={{ marginTop: "40px" }}>
                <Col sm={6} >
                    <Image fluid rounded src={Travel}/>
                </Col>
                <Col sm={6}>
                    <h1 style={{ textAlign: "center" }} className="HeaderTextMB">Travelling</h1>
                    <h2 style={{ textAlign: "center" }} className="AboutDescript">
                        As the child of an immigrant family, I've always been fascinated with the culture of my homeland, and in general, how different civilizations
                        around the world operate. Having the privelege to travel has opened my eyes and mind to the world around me and has enriched me with many
                        invaluable experiences.
                    </h2>
                </Col>
            </Row>
            <Row style={{ marginTop: "40px" }}>
                <Col sm={6} >
                    <Image fluid rounded src={Volleyball}/>
                </Col>
                <Col sm={6}>
                    <h1 style={{ textAlign: "center" }} className="HeaderTextMB">Staying Active</h1>
                    <h2 style={{ textAlign: "center" }} className="AboutDescript">
                        As they say, health is wealth! Often times, it's easy to be caught up in our daily lives and forget that our health should be our number one priority.
                        Although it's a struggle for me to balance a healthy lifestyle with school/work, it is a practice that I'm constantly trying to integrate with my life. I enjoy hiking, working out,
                        and playing sports to stay active.
                    </h2>
                </Col>
            </Row>
        </Container>
    )
}