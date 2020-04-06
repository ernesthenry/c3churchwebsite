import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import person1 from './images/person1.jpg'
import person4 from './images/person4.jpg'

const LocationPastors = () => {
    return(
    <Container className="team my-3 py-5 text-center" >
        <div className="mb-5 text-center ">
        <h1>Meet Our Location Pastors</h1>
        <p className="mt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, iure!</p>
        </div>
         
        <Row >
            <Col>
                <Card>
                    <Card.Img variant="top" src={person1} className="img-fluid rounded-circle w-50 mb-3"/>
                    <Card.Body>
                        <Card.Title><h3>Jackie Sars</h3></Card.Title>
                        <Card.Text>
                            <h5>Co-Writer</h5>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, earum.</p>
                            <div className="d-flex flex-row justify-content-center">
                                <div className="p-4">
                                    <Card.Link href="#">
                                        <i className="fa fa-facebook"></i>
                                    </Card.Link>
                                </div>
                                <div className="p-4">
                                    <Card.Link href="#">
                                        <i className="fa fa-twitter"></i>
                                    </Card.Link>
                                </div>
                                <div className="p-4">
                                    <Card.Link href="#">
                                        <i className="fa fa-instagram"></i>
                                    </Card.Link>
                                </div>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            
            </Col>
        
            <Col>
                <Card>
                    <Card.Img variant="top" src={person4} className="img-fluid rounded-circle w-50 mb-3" />
                    <Card.Body>
                        <Card.Title><h3>Jackie Sars</h3></Card.Title>
                        <Card.Text>
                            <h5>Co-Writer</h5>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, earum.</p>
                            <div className="d-flex flex-row justify-content-center">
                                <div className="p-4">
                                    <Card.Link href="#">
                                        <i className="fa fa-facebook"></i>
                                    </Card.Link>
                                </div>
                                <div className="p-4">
                                    <Card.Link href="#">
                                        <i className="fa fa-twitter"></i>
                                    </Card.Link>
                                </div>
                                <div className="p-4">
                                    <Card.Link href="#">
                                        <i className="fa fa-instagram"></i>
                                    </Card.Link>
                                </div>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card>
                    <Card.Img variant="top" src={person1} className="img-fluid rounded-circle w-50 mb-3"/>
                    <Card.Body>
                        <Card.Title><h3>Jackie Sars</h3></Card.Title>
                        <Card.Text>
                            <h5>Co-Writer</h5>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, earum.</p>
                            <div className="d-flex flex-row justify-content-center">
                                <div className="p-4">
                                    <Card.Link href="#">
                                        <i className="fa fa-facebook"></i>
                                    </Card.Link>
                                </div>
                                <div className="p-4">
                                    <Card.Link href="#">
                                        <i className="fa fa-twitter"></i>
                                    </Card.Link>
                                </div>
                                <div className="p-4">
                                    <Card.Link href="#">
                                        <i className="fa fa-instagram"></i>
                                    </Card.Link>
                                </div>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
            <Card ><Card.Img variant="top" src={person4} className="img-fluid rounded-circle w-50 mb-3"/>
                    <Card.Body>
                        <Card.Title><h3>Jackie Sars</h3></Card.Title>
                        <Card.Text>
                            <h5>Co-Writer</h5>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, earum.</p>
                            <div className="d-flex flex-row justify-content-center">
                                <div className="p-4">
                                    <Card.Link href="#">
                                        <i className="fa fa-facebook"></i>
                                    </Card.Link>
                                </div>
                                <div className="p-4">
                                    <Card.Link href="#">
                                        <i className="fa fa-twitter"></i>
                                    </Card.Link>
                                </div>
                                <div className="p-4">
                                    <Card.Link href="#">
                                        <i className="fa fa-instagram"></i>
                                    </Card.Link>
                                </div>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>


            </Row>
            </Container>
    )
}

export default LocationPastors;

