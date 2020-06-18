import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import wairege from './images/wairege.jpg'
import fabian from './images/fabian.jpg'
import chris from './images/chris.jpg'
import edwin from './images/edwin.jpg'

const LocationPastors = () => {
    return(
    <Container className="team my-3 py-5 text-center" >
        <div className="mb-5 text-center ">
        <h2>Location Pastors</h2>
        <p className="mt-3" style={{"font-size": "20px"}}>Meet our Location pastors across four locations in Uganda</p>
        </div>
         
        <Row className="pastors">
            <Col className='col-xs-3'>
                <Card className="location-pastors">
                    <Card.Img variant="top" src={edwin} className="img-fluid rounded-circle w-50 mb-3"/>
                    <Card.Body>
                        <Card.Title><h3>Edwin</h3></Card.Title>
                        <Card.Text>
                            <h5><i>Location Pastor - Kabalagala</i></h5>
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
        
            <Col className='col-xs-3'>
                <Card className="location-pastors">
                    <Card.Img variant="top" src={wairege} className="img-fluid rounded-circle w-50 mb-3" />
                    <Card.Body>
                        <Card.Title><h3>Wairege Ahmed</h3></Card.Title>
                        <Card.Text>
                            <h5><i>Location Pastor - Bwera</i></h5>
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

            <Col className='col-xs-3'>
                <Card className="location-pastors">
                    <Card.Img variant="top" src={chris} className="img-fluid rounded-circle w-50 mb-3"/>
                    <Card.Body>
                        <Card.Title><h3>Chris</h3></Card.Title>
                        <Card.Text>
                            <h5>Location Pastor - Kasese</h5>
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

            <Col className='col-xs-3'>
            <Card className="location-pastors"><Card.Img variant="top" src={fabian} className="img-fluid rounded-circle w-50 mb-3"/>
                    <Card.Body>
                        <Card.Title><h3>Fabian Semugenyi</h3></Card.Title>
                        <Card.Text>
                            <h5>Location Pastor - Matugga</h5>
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

