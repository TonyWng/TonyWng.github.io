import React, {useState, useEffect} from 'react'
import '../App.css'
import {FaLinkedin, FaGithub, FaFileAlt, FaEnvelope} from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Headshot from '../Images/Headshot.png'
import ParticleComponent from './ParticleComponent'



export default function LandingPage(props) {
    const descriptList = ['Software Engineer', 'Computer Science Student', 'Music Enthusiast', 'Intramural Legend', 'Puppy Lover']
    const [descriptVal, setDescriptVal] = useState(0)

    useEffect(() => {
        let descriptInd = descriptVal
        const interval = setInterval(() => {
            (descriptInd === 4) ? descriptInd = 0 : descriptInd++
            setDescriptVal(descriptInd)
        }, 6000)
        return () => clearInterval(interval)
    })

    const generateID = () => {
        const newId = Math.floor(Math.random() * 1000) + 1
        return newId
    }

    return (
        <Container className="ContainerStyle">
            <ParticleComponent id="particle-js"/>
            <Row>
                <Col sm={12} lg={6}>
                    <div className='LandingPageContentL'>
                        <h1 className="HeaderTextSm">Hey there! I'm</h1>
                        <h1 className="HeaderTextLgB">Tony Wang</h1>
                        <h1 key={generateID()} id="descriptLine" className="HeaderTextMB">{descriptList[descriptVal]}</h1>
                        <IconContext.Provider value={{
                            className:"IconRow"
                        }}>
                            <a href="https://www.linkedin.com/in/wang-tony/" target="_blank">
                                <FaLinkedin color="black"/>
                            </a>
                            <a href="https://github.com/TonyWng" target="_blank">
                                <FaGithub color="black"/>
                            </a>
                            <a href="https://drive.google.com/file/d/1KMKEvWpMsOa-v4a1yOT1hkYqqvt2L9hZ/view?usp=sharing" target="_blank">
                                <FaFileAlt color="black"/>
                            </a>
                            <a href="mailto:Tonyy.wangg@gmail.com">
                                <FaEnvelope color="black"/>
                            </a>
                        </IconContext.Provider>
                        <h1 className='BodyText'>
                            Thanks for checking out my website! My name's Tony and I'm a 3rd year CS student at the University of Waterloo. 
                            I'm currently seeking SWE internships for the upcoming Fall 2021 term. You can scroll down to check out some of my past experiences/projects.
                            Feel free to shoot me an email or a message on LinkedIn if you want to connect!
                        </h1>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className='LandingPageContentR'>
                        <Image className='Headshot' width={500} fluid src={Headshot} rounded/>
                    </div>  
                </Col>
            </Row>
        </Container>
            
    )
}