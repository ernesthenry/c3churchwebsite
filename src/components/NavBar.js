import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'


const NavBar = () => {
    return (
        <div className="Navbar">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">C3 Alive</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">MINISTRIES</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Kids</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">Kids</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Kids</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Youth</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Cherish Women</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Hy Team</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Muscle Team</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            

        </div>
    )
}

export  default NavBar;