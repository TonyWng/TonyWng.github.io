import LandingPage from './Components/LandingPage'
import Experience from './Components/Experience'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import About from './Components/About'
import {Navbar, Nav, Container} from 'react-bootstrap'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div>
      <Container id="Navbar">
        <Navbar expand="lg" style={{ height: '100px', backgroundColor: "white" }}>
          <Navbar.Brand>
            <Link to="LandingPage" smooth={true} duration={800}>
            <FontAwesomeIcon style={{marginRight: "20px"}} size="2x" icon={faUser}/>
            <h1 style={{display: "inline-block"}} className="NavbarText">TW</h1>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse style={{zIndex: "100", background: "white"}} id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link>
                <Link to="Experience" smooth={true} duration={800}>
                  <h1 className="NavbarText">Experience</h1>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="Skills" smooth={true} duration={800}>
                  <h1 className="NavbarText">Skills</h1>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="Projects" smooth={true} duration={800}>
                  <h1 className="NavbarText">Projects</h1>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="About" smooth={true} duration={800}>
                  <h1 className="NavbarText">About Me</h1>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>

      <Link to="Navbar" smooth={true} duration={800}>
        <FontAwesomeIcon color="rgb(33, 150, 243)" className="UpArrow" icon={faArrowCircleUp}/>
      </Link>
      
      <div id="LandingPage">
        <LandingPage/>
      </div>
      
      <div id="Experience">
        <Experience/>
      </div>

      <div  id="Skills" >
        <Skills/>
      </div>
      
      <div  id="Projects" >
        <Projects/>
      </div>
      
      <div  id="About" >
        <About/>  
      </div>
      
    </div>
  );
}

export default App;
