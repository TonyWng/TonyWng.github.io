import React, { useState } from 'react'
import { Container, Row, Col, Card, Button, ButtonGroup } from 'react-bootstrap';
import '../App.css';
import JukeJamIMG from '../Images/JukeJam.png';
import SnakeGameIMG from '../Images/SnakeGame.png';
import StrategoIMG from '../Images/Stratego.png';
import PDFEditorIMG from '../Images/PDFReader.png';
import SketchItIMG from '../Images/SketchIt.png';
import VirtualClosetIMG from '../Images/VirtualCloset.jpeg';
import WhichWayIMG from '../Images/WhichWay.jpeg';
import WebDeveloperBootCampIMG from '../Images/WebDeveloperBootCamp.png';



export default function Projects(props) {
    const [forSchool, toggleProject] = useState(false);
    let toggleSchool = () => {
        if (!forSchool) {
            toggleProject(true);
        }
    };
    let toggleNonSchool = () => {
        if (forSchool) {
            toggleProject(false);
        }
    };

    return (
        <Container className="ContainerStyle">
            <Row>
                <Col>
                    <h1 className="HeaderTextMB">Things I've Worked On</h1>
                    <ButtonGroup style={{ padding: "15px" }}>
                        <Button onClick={() => toggleNonSchool()} variant={forSchool ? "secondary" : "primary"}>Out of School</Button>
                        <Button onClick={() => toggleSchool()} variant={forSchool ? "primary" : "secondary"}>In School</Button>
                    </ButtonGroup>
                </Col>
            </Row>
            <div className={forSchool ? "hidden" : ""}>
                <Row style={{ marginTop: "2em" }}>
                    <Col md={6}>
                        <Card>
                            <Card.Img variant='top' src={JukeJamIMG} />
                            <Card.Body>
                                <Card.Title>
                                    <h1 className="titleText">Juke Jam</h1>
                                </Card.Title>
                                <Card.Subtitle>
                                    <h1 className="technologiesText">Socket.io, Spotify API, Node.js, Express.js, React, Redux, MongoDB, Mongoose </h1>
                                </Card.Subtitle>
                                <Card.Text>
                                    <h1 className="projectDescriptText">
                                        Juke Jam is a webapp that allows users to authenticate through spotify to create real-time listening parties.
                                        Users with access to a room can interact with a live queue to add songs or like/dislike songs to resort the queue order. Spotify API calls are made through a Node/Express server
                                        while the client is built using React and Redux, with socket.io supporting real-time client server communication.
                            </h1>
                                </Card.Text>
                                <Button className="buttonStyle" style={{ marginRight: "20px" }} target="_blank" variant="primary" href="http://juke-jam.com/">Check it out!</Button>
                                <Button className="buttonStyle" target="_blank" variant="primary" href="https://github.com/bduge/juke-jam">Source Code</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card className="bottomCard">
                            <Card.Img variant='top' src={VirtualClosetIMG} />
                            <Card.Body>
                                <Card.Title>
                                    <h1 className="titleText">Virtual Stylist</h1>
                                </Card.Title>
                                <Card.Subtitle>
                                    <h1 className="technologiesText">Django, Android Studio, MySQL, Google Cloud, Weather API</h1>
                                </Card.Subtitle>
                                <Card.Text>
                                    <h1 className="projectDescriptText">
                                        Virtual Stylist is an android application that allows users to virtually manage their closet. This project was built at WesternHacks with the intention of helping those wanting to save time in the morning.
                                        The app stores a database of the user's closet and recommends outfits based on the current day's weather as well popular colour combinations.
                            </h1>
                                </Card.Text>
                                <Button target="_blank" variant="primary" href="https://github.com/SamYu/stylist.ai">Source Code</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row style={{ marginTop: "40px" }}>
                    <Col md={6}>
                        <Card>
                            <Card.Img variant='top' src={WhichWayIMG} />
                            <Card.Body>
                                <Card.Title>
                                    <h1 className="titleText">Which Way</h1>
                                </Card.Title>
                                <Card.Subtitle>
                                    <h1 className="technologiesText">Swift 4, MapKit, CoreLocation, </h1>
                                </Card.Subtitle>
                                <Card.Text>
                                    <h1 className="projectDescriptText">
                                        Which Way is an IOS application that allows users to search for a point of interest based on the current direction they're heading in. The app uses Apple's CoreLocation framework to identify the current position of the user as well as
                                        their gyroscopic heading. Given a specified distance as well as a search query, the app returns all matching POIs.
                                    </h1>
                                </Card.Text>
                                <Button target="_blank" variant="primary" href="https://github.com/SamYu/Dat-Way">Source Code</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="bottomCard">
                            <Card.Img variant='top' src={WebDeveloperBootCampIMG} />
                            <Card.Body>
                                <Card.Title>
                                    <h1 className="titleText">Udemy Complete Web Developer Bootcamp</h1>
                                </Card.Title>
                                <Card.Subtitle>
                                    <h1 className="technologiesText">HTML, CSS, Javascript, Node.js, Express.js, Axios, mongoDB, mongoose, RESTful Routing</h1>
                                </Card.Subtitle>
                                <Card.Text>
                                    <h1 className="projectDescriptText">
                                        Through the completion of this course, I've been able to develop a foundational understanding for web development, covering many aspects on the client and server side through 63 hours of video lectures as well code-along projects. Some project examples include a
                                <a target="_blank" href="https://github.com/TonyWng/ColorGame"> Colour Game</a> and <a target="_blank" href="https://github.com/TonyWng/Circles">Keyboard Animator</a> to practice JQuery,
                                creating a simple <a target="_blank" href="https://github.com/TonyWng/BlogApp">Dynamic Blog App</a> following CRUD to understand RESTful routing as well as setting up a Node/Express server, and a full stack web application supporting user authentication, creating public posts, and user-post interaction.  ladnin

                            </h1>
                                </Card.Text>
                                <Button target="_blank" variant="primary" href="https://docs.google.com/document/d/1UOv5oPtQuqy3iiBRTJO__5dj5niT-Ww2PpOS6b3x_lc/edit?usp=sharing">Course Notes</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className={!forSchool ? "hidden" : ""}>
                <Row>
                    <Col md={6}>
                        <Card>
                            <Card.Img variant='top' src={SnakeGameIMG} />
                            <Card.Body>
                                <Card.Title>
                                    <h1 className="titleText">Snake Game</h1>
                                </Card.Title>
                                <Card.Subtitle>
                                    <h1 className="technologiesText">Java, JavaFX</h1>
                                </Card.Subtitle>
                                <Card.Text>
                                    <h1 className="projectDescriptText">
                                        Built Java snake game application for CS349 - User Interfaces. Followed MVC pattern to support various keyboard controls, keeping track of user's score/level, and displaying simple animations triggerd by events.
                            </h1>
                                </Card.Text>
                                <Button target="_blank" variant="primary" href="https://github.com/TonyWng/CS349-SnakeGame">Source Code</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="bottomCard">
                            <Card.Img variant='top' src={SketchItIMG} />
                            <Card.Body>
                                <Card.Title>
                                    <h1 className="titleText">SketchIt</h1>
                                </Card.Title>
                                <Card.Subtitle>
                                    <h1 className="technologiesText">Java, JavaFX</h1>
                                </Card.Subtitle>
                                <Card.Text>
                                    <h1 className="projectDescriptText">
                                        Built Java SketchIt application for CS349 - User Interfaces. Supports various drawing/colouring functionalities through using the JavaFX library
                            </h1>
                                </Card.Text>
                                <Button target="_blank" variant="primary" href="https://github.com/TonyWng/CS349-SketchIt">Source Code</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row style={{marginTop: "40px"}}>
                    <Col md={6}>
                        <Card>
                            <Card.Img variant='top' src={StrategoIMG} />
                            <Card.Body>
                                <Card.Title>
                                    <h1 className="titleText">Stratego</h1>
                                </Card.Title>
                                <Card.Subtitle>
                                    <h1 className="technologiesText">C++</h1>
                                </Card.Subtitle>
                                <Card.Text>
                                    <h1 className="projectDescriptText">
                                        Designed and implemented a version of Stratego board game for CS246 - Object Oriented Software Development. Followed software design procedures to plan/outline project and implemented following various OOP principles/design patterns.
                                    </h1>
                                </Card.Text>
                                <Button target="_blank" variant="primary" href="https://github.com/TonyWng/Stratego">Check it out!</Button>
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col md={6}>
                        <Card className="bottomCard">
                            <Card.Img variant='top' src={PDFEditorIMG} />
                            <Card.Body>
                                <Card.Title>
                                    <h1 className="titleText">PDF Editor</h1>
                                </Card.Title>
                                <Card.Subtitle>
                                    <h1 className="technologiesText">Android Studio, Java, JavaFX</h1>
                                </Card.Subtitle>
                                <Card.Text>
                                    <h1 className="projectDescriptText">
                                        Created a PDF editor android application for CS349 - User Interfaces supporting various highlighting/drawing features as well as toggling between pages
                            </h1>
                                </Card.Text>
                                <Button target="_blank" variant="primary" href="https://github.com/TonyWng/CS349-PDFReader">Source Code</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>

        </Container>
    )
}