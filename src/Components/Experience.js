import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faGraduationCap, faBriefcase, faSchool } from '@fortawesome/free-solid-svg-icons';
import ParticleComponent from './ParticleComponent'

import '../App.css';

export default function Experience(props) {
    return (
        <Container className="ContainerStyle">
            <ParticleComponent id="particle-js" />
            <Row>
                <Col>
                    <h1 className="HeaderTextMB">
                        EXPERIENCE
                </h1>
                </Col>
            </Row>
            <Row style={{ marginTop: "2em" }}>
                <Col>
                    <VerticalTimeline className="vertical-timeline-custom-line">
                        <VerticalTimelineElement
                            date="May 2020 - April 2021"
                            contentStyle={{ borderTop: '5px solid rgb(33,150,243)' }}
                            contentArrowStyle={{ borderRight: '10px solid  rgb(33, 150, 243)' }}
                            iconStyle={{ background: 'white', color: 'black', boxShadow: '0 0 0 4px rgb(33, 150, 243)' }}
                            icon={<FontAwesomeIcon style={{paddingRight: "7px"}} color="rgb(33, 150, 243)" size="2x" icon={faBriefcase}/>}
                            onTimelineElementClick={() => window.open('https://tehama.io/')}
                        >
                            <h3 className="titleText">Software Engineer Intern</h3>
                            <h4 className="subtitleText">Tehama</h4>
                            <h6 className="technologiesText">Typescript, React, Node.js, GraphQL, Sequelize, Cypress, Jest, Semantic-UI</h6>
                            <ul className="fa-ul">
                                <li>
                                    <span className="fa-li">
                                        <FontAwesomeIcon className="bulletStyle" icon={faCode} listItem />
                                    </span>
                                    <h1 className="projectDescriptText">
                                    Improved contract administration efficiency and accelerated sign-up speeds by 40% through implementing an internal subscription management dashboard from end to end using Typescript, Sequelize and GraphQL, interfaced with React and Semantic-UI.                                   
                                    </h1>
                                </li>
                                <li>
                                    <span className="fa-li">
                                        <FontAwesomeIcon className="bulletStyle" icon={faCode} listItem />
                                    </span>
                                    <h1 className="projectDescriptText">
                                    Reduced developer build time by 20% through optimizing CI/CD pipeline by refactoring 25+ Cypress test suites and spearheading the migration of 50+ Selenium tests to Cypress.                                    
                                    </h1>
                                </li>
                                <li>
                                    <span className="fa-li">
                                        <FontAwesomeIcon className="bulletStyle" icon={faCode} listItem />
                                    </span>
                                    <h1 className="projectDescriptText">
                                    Increased product usability metrics by following UDD principles to revamp various application workflows.                                    
                                    </h1>
                                </li>
                                <li>
                                    <span className="fa-li">
                                        <FontAwesomeIcon className="bulletStyle" icon={faCode} listItem />
                                    </span>
                                    <h1 className="projectDescriptText">
                                    Worked effectively in scrum environment across teams to deliver 25+ bug fixes and product features on Tehama's web application.                                    
                                    </h1>
                                </li>
                                <li>
                                    <span className="fa-li">
                                        <FontAwesomeIcon className="bulletStyle" icon={faCode} listItem />
                                    </span>
                                    <h1 className="projectDescriptText">
                                    Expanded test coverage by 15%, reducing need for manual regression testing by writing 50+ unit, snapshot, and integration tests using Jest and Cypress.                                  
                                    </h1>
                                </li>
                            </ul>

                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            date="May 2019 - August 2019"
                            contentStyle={{ borderTop: '5px solid rgb(33,150,243)' }}
                            contentArrowStyle={{ borderRight: '10px solid  rgb(33, 150, 243)' }}
                            iconStyle={{ background: 'white', color: 'black', boxShadow: '0 0 0 4px rgb(33, 150, 243)' }}
                            icon={<FontAwesomeIcon style={{paddingRight: "7px"}} color="rgb(33, 150, 243)" size="2x" icon={faBriefcase}/>}
                            onTimelineElementClick={() => window.open('https://webveloper.com/')}
                        >
                            <h3 className="titleText">Customer Engineer</h3>
                            <h4 className="subtitleText">Webveloper</h4>
                            <h6 className="technologiesText">React.js, Material UI, Javascript, HTML/CSS, jQuery, Bootstrap</h6>

                            <ul className="fa-ul">
                                <li>
                                    <span className="fa-li">
                                        <FontAwesomeIcon className="bulletStyle" icon={faCode} listItem />
                                    </span>
                                    <h1 className="projectDescriptText">
                                        Improved site deployment speeds by 70% through implementing reusable and dynamic React components that autonomously generate from customer input
                                    </h1>
                                </li>
                                <li>
                                    <span className="fa-li">
                                        <FontAwesomeIcon className="bulletStyle" icon={faCode} listItem />
                                    </span>
                                    <h1 className="projectDescriptText">
                                        Designed and developed consumer facing web applications based on customer requests using HTML/CSS, Javascript, JQuery, and Bootstrap
                                    </h1>
                                </li>
                                <li>

                                    <span className="fa-li">
                                        <FontAwesomeIcon className="bulletStyle" icon={faCode} listItem />
                                    </span>
                                    <h1 className="projectDescriptText">
                                        Handled site-launches, migrating DNS records, and generating SSL certifications to seamlessly support hosting for customers' websites

                                    </h1>
                                </li>
                            </ul>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            date="September 2018 - May 2023 (Expected)"
                            contentStyle={{ borderTop: '5px solid rgb(33,150,243)' }}
                            contentArrowStyle={{ borderRight: '10px solid  rgb(33, 150, 243)' }}
                            iconStyle={{ background: 'white', color: 'black', boxShadow: '0 0 0 4px rgb(33, 150, 243)' }}
                            icon={<FontAwesomeIcon style={{paddingRight: "15px"}} color="rgb(33, 150, 243)" size="2x" icon={faSchool}/>}

                        >
                            <h3 className='titleText'>Computer Science Student</h3>
                            <h4 className="subtitleText">University of Waterloo</h4>
                            Relevant Coursework: <br />
                            <ul className="fa-ul">
                                <li>
                                    <span className="fa-li">
                                        <FontAwesomeIcon className="bulletStyle" icon={faGraduationCap} listItem />
                                    </span>
                                    <h1 className="projectDescriptText">
                                        CS246 - Object Oriented Software Development
                                    </h1>

                                </li>
                                <li>
                                    <span className="fa-li">
                                        <FontAwesomeIcon className="bulletStyle" icon={faGraduationCap} listItem />
                                    </span>
                                    <h1 className="projectDescriptText">
                                        CS341 - Algorithms

                                    </h1>
                                </li>
                                <li>
                                    <span className="fa-li">
                                        <FontAwesomeIcon className="bulletStyle" icon={faGraduationCap} listItem />
                                    </span>
                                    <h1 className="projectDescriptText">
                                        CS240 - Data Structures and Data Management
                                    </h1>

                                </li>
                                <li>
                                    <span className="fa-li">
                                        <FontAwesomeIcon className="bulletStyle" icon={faGraduationCap} listItem />
                                    </span>
                                    <h1 className="projectDescriptText">
                                        CS350 - Operating Systems
                                    </h1>

                                </li>
                                <li>
                                    <span className="fa-li">
                                        <FontAwesomeIcon className="bulletStyle" icon={faGraduationCap} listItem />
                                    </span>
                                    <h1 className="projectDescriptText">
                                        CS349 - User Interfaces
                                </h1>

                                </li>
                                <li>
                                    <span className="fa-li">
                                        <FontAwesomeIcon className="bulletStyle" icon={faGraduationCap} listItem />
                                    </span>
                                    <h1 className="projectDescriptText">
                                        CS348 - Database Management
                                    </h1>

                                </li>
                                <li>
                                    <span className="fa-li">
                                        <FontAwesomeIcon className="bulletStyle" icon={faGraduationCap} listItem />
                                    </span>
                                    <h1 className="projectDescriptText">
                                        CS245 - Logic and Computation
                                    </h1>

                                </li>
                                <li>
                                    <span className="fa-li">
                                        <FontAwesomeIcon className="bulletStyle" icon={faGraduationCap} listItem />
                                    </span>
                                    <h1 className="projectDescriptText">
                                        CS241 - Foundations of Sequential Programs
                                    </h1>

                                </li>
                            </ul>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </Col>
            </Row>
        </Container>
    )
}