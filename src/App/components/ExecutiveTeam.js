import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import robert from './images/robert.jpg'
import benson from './images/benson.jpg'
import Neghema from './images/Neghema.jpg'
import annet from './images/annet.jpg'

const ExecutiveTeam = () => {
    return(
    <Container className="text-center" >
         <h2 className="text-center">The Executive Team</h2>
        <p className="mt-3 text-center" style={{"font-size":"20px"}}>Meet our Location Directors across  four locations</p>
        <Row className="mb-5">
            <Col className='col-xs-3'>
                <Card  className="executives">
                    <Card.Img variant="top" src={annet} className="image"/>
                    <Card.Body>
                        <Card.Title><h3 style={{"font-size": "18px"}}>Pastor Annet</h3></Card.Title>
                        <Card.Text>
                        <h6>Director - C3 Alive Kabalagala</h6>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, earum.</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            
            </Col>
        
            <Col className='col-xs-3'>
                <Card className="executives">
                    <Card.Img variant="top" src={Neghema} />
                    <Card.Body>
                        <Card.Title><h3 style={{"font-size": "18px"}}>Neghema</h3></Card.Title>
                        <Card.Text>
                        <h6>Director - C3 Alive Bwera</h6>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, earum.</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col className='col-xs-3'>
                <Card className="executives">
                    <Card.Img variant="top" src={benson} />
                    <Card.Body>
                        <Card.Title><h3 style={{"font-size": "18px"}}>Benson</h3></Card.Title>
                        <Card.Text>
                        <h6>Director - C3 Alive Kasese</h6>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, earum.</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='col-xs-3'>
                <Card className="executives">
                    <Card.Img variant="top" src={robert} />
                    <Card.Body>
                        <Card.Title><h3 style={{"font-size": "18px"}}>Robert & Immaculate</h3></Card.Title>
                        <Card.Text>
                        <h6>Directors - C3 Alive Matugga</h6>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, earum.</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            </Row>
            
            </Container>
    )
}

export default ExecutiveTeam;

