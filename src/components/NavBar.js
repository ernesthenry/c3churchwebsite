import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logoc3 from './images/logoc3.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


const NavBar = () => {
    return (
        <>
        <Container fluid className="bg-primary">
            <Row className=" top-bar" style={{ 'padding-bottom':'5px' }}>
                <div className="col-text-left">
                    <span className="text-white">
                        <i className="fa fa-facebook"></i>
                    </span>
                    <span className="text-white">
                        <i className="fa fa-skype"></i>
                    </span>
                    <span className="text-white">
                        <i className="fa fa-twitter"></i>
                    </span>
                    <span className="text-white">
                        <i className="fa fa-youtube"></i>
                    </span> 
                </div>

                <div className="col text-right">
                    <span className="text-white">
                        <i className="fa fa-phone"></i>
                        +256 80000 9999993
                    </span> 

                    <span className="text-white">
                        <i className="fa fa-envelope"></i>
                        +256 80000 9999993
                    </span>
                </div>

            </Row>
        </Container>
        
        <Container fluid className="Navbar">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home" className="navbar-brand"><img  src={logoc3} alt="logo"/> <i>ALIVE</i></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <NavLink to='/' className="nav-link">HOME</NavLink>
                        <NavLink to='/about-us' className="nav-link">ABOUT</NavLink>
                        <NavLink to='/ministries' className="nav-link">MINISTRIES</NavLink>
                        <NavLink to='/giving' className="nav-link">GIVING</NavLink>
                        <NavLink to='/contact-us' className="nav-link">CONTACT US</NavLink>
                        <NavLink to='/vision-builders' className="nav-link">VISION BUILDERS</NavLink>
                        <NavLink to='/next-steps' className="nav-link">NEXT STEPS</NavLink>

                    </Nav>
                    
                </Navbar.Collapse>
            </Navbar>
        </Container>
        </>
    
            )
}

export  default NavBar;