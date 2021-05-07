import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../App.css';
import ParticleComponent from './ParticleComponent'
import { Icon } from "@iconify/react";
import javascriptIcon from '@iconify-icons/simple-icons/javascript';
import typescriptIcon from '@iconify-icons/simple-icons/typescript';
import pythonIcon from '@iconify-icons/simple-icons/python';
import html5Icon from '@iconify-icons/simple-icons/html5';
import css3Icon from '@iconify-icons/simple-icons/css3';
import javaIcon from '@iconify-icons/simple-icons/java';
import gnubashIcon from '@iconify-icons/simple-icons/gnubash';
import reactIcon from '@iconify-icons/simple-icons/react';
import reduxIcon from '@iconify-icons/simple-icons/redux';
import cypressIcon from '@iconify-icons/simple-icons/cypress';
import jestIcon from '@iconify-icons/simple-icons/jest';
import jqueryIcon from '@iconify-icons/simple-icons/jquery';
import expressIcon from '@iconify-icons/simple-icons/express';
import nodeIcon from '@iconify-icons/simple-icons/node-dot-js';
import mongoDBIcon from '@iconify-icons/simple-icons/mongodb';
import bootstrapIcon from '@iconify-icons/simple-icons/bootstrap';
import graphqlIcon from '@iconify-icons/file-icons/graphql';
import cSolid from '@iconify-icons/teenyicons/c-solid';
import cIcon from '@iconify-icons/file-icons/c';
import sequelizeIcon from '@iconify-icons/file-icons/sequelize';
import sqlIcon from '@iconify-icons/carbon/sql';




export default function Skills(props) {
    return (
        <Container style={{ marginTop: "75px" }} className="ContainerStyle">
            <Row>
                <Col>
                    <h1 className="HeaderTextMB">Skills</h1>
                    <h1 style={{marginTop: "50px", textAlign: "center"}} className="AboutText">
                        These are some of the languages/technologies that I've used in the past. Although I may have not worked with your company's 
                        exact stack, I would say that I have developed a solid fundamental understanding of programming through school, internships, and personal practice
                        to help me quickly adapt to any coding environment. 
                    </h1>
                </Col>
            </Row>
            <Row style={{ marginTop: "2em" }}>
                <Col>
                    <Card className="skillCardStyle">
                        <Card.Header style={{ backgroundColor: "white", borderWidth: "5px", borderBottomStyle: "none", borderTopStyle: "solid", borderColor: "#1a8cff" }} className="text-center">
                            <h1 className="titleText">Languages</h1>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <h1 className="subtitleText">Exprienced</h1>
                                </Col>
                                <Col>
                                    <h1 className="subtitleText">Proficient</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Icon className="iconStyle" icon={pythonIcon} />
                                    <h1 className="skillText">Python</h1>
                                </Col>
                                <Col>
                                    <Icon className="iconStyle" icon={javascriptIcon} />
                                    <h1 className="skillText">Javascript</h1>
                                </Col>
                            </Row>
                            <Row className="marginTop">
                                <Col>
                                    <Icon className="iconStyle" icon={javaIcon} />
                                    <h1 className="skillText">Java</h1>
                                </Col>
                                <Col>
                                    <Icon className="iconStyle" icon={typescriptIcon} />
                                    <h1 className="skillText">Typescript</h1>
                                </Col>
                            </Row>
                            <Row className="marginTop">
                                <Col>
                                    <Icon className="iconStyle" icon={cSolid} />
                                    <h1 className="skillText">C</h1>
                                </Col>
                                <Col>
                                    <Icon className="iconStyle" icon={cIcon} />
                                    <h1 className="skillText">C++</h1>
                                </Col>
                            </Row>
                            <Row className="marginTop">
                                <Col>
                                    <Icon className="iconStyle" icon={sqlIcon} />
                                    <h1 className="skillText">SQL</h1>
                                </Col>
                                <Col>
                                    <Icon className="iconStyle" icon={css3Icon} />
                                    <h1 className="skillText">CSS</h1>
                                </Col>
                            </Row>
                            <Row className="marginTop">
                                <Col>
                                    <Icon className="iconStyle" icon={gnubashIcon} />
                                    <h1 className="skillText">Bash</h1>
                                </Col>
                                <Col>
                                    <Icon className="iconStyle" icon={html5Icon} />
                                    <h1 className="skillText">HTML</h1>
                                </Col>
                            </Row>
                            <Row>
                                
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="skillCardStyle">
                        <Card.Header style={{ backgroundColor: "white", borderWidth: "5px", borderBottomStyle: "none", borderTopStyle: "solid", borderColor: "#1a8cff" }} className="text-center">
                            <h1 className="titleText">Tools/Frameworks</h1>
                        </Card.Header>
                        <Card.Body>
                        <Row>
                            <Col>
                            <h1 className="subtitleText">Exprienced</h1>
                            </Col>
                            <Col>
                            <h1 className="subtitleText">Proficient</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <Icon className="iconStyle" icon={graphqlIcon}/>
                            <h1  className="skillText">GraphQL</h1>
                            </Col>
                            <Col>
                            <Icon className="iconStyle" icon={reactIcon}/>
                            <h1  className="skillText">React</h1>
                            </Col>
                        </Row>
                        <Row className="marginTop">
                            <Col>
                            <Icon className="iconStyle" icon={sequelizeIcon}/>
                            <h1  className="skillText">Sequelize</h1>
                            </Col>
                            <Col>
                            <Icon className="iconStyle" icon={reduxIcon}/>
                            <h1  className="skillText">Redux</h1>
                            </Col>
                        </Row>
                        <Row className="marginTop">
                            <Col>
                            <Icon className="iconStyle" icon={expressIcon}/>
                            <h1  className="skillText">Express.js</h1>
                            </Col>
                            <Col>
                            <Icon className="iconStyle" icon={nodeIcon}/>
                            <h1 className="skillText">Node.js</h1>
                            </Col>
                        </Row>
                        <Row className="marginTop">
                            <Col>
                            <Icon className="iconStyle" icon={mongoDBIcon}/>
                            <h1  className="skillText">mongoDB</h1>
                            </Col>
                            <Col>
                            <Icon className="iconStyle" icon={cypressIcon}/>
                            <h1  className="skillText">Cypress</h1>
                            </Col>
                        </Row>
                        <Row className="marginTop">
                            <Col>
                            <Icon className="iconStyle" icon={jqueryIcon}/>
                            <h1  className="skillText">JQuery</h1>
                            </Col>
                            <Col>
                            <Icon className="iconStyle" icon={bootstrapIcon}/>
                            <h1  className="skillText">Bootstrap</h1>
                            </Col>
                        </Row>
                        <Row className="marginTop">
                            <Col>
                            <Icon className="iconStyle" icon={jestIcon}/>
                            <h1  className="skillText">Jest</h1>
                            </Col>
                            <Col>
                            </Col>
                        </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}