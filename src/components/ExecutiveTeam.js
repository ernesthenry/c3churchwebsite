import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import person1 from './images/person1.jpg'
import person4 from './images/person4.jpg'

const ExecutiveTeam = () => {
    return(
    <Container className="text-center" >
         <h1 className="text-center">The Executive Team</h1>
        <p className="mt-3 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, iure!</p>
        <Row className="mb-5">
            <Col>
                <Card  className="executives">
                    <Card.Img variant="top" src={person1} className="image"/>
                    <Card.Body>
                        <Card.Title><h3>LUutu Daniel</h3></Card.Title>
                        <Card.Text>
                            <h5>C</h5>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, earum.</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            
            </Col>
        
            <Col>
                <Card className="executives">
                    <Card.Img variant="top" src={person4} />
                    <Card.Body>
                        <Card.Title><h3>Jackie Sars</h3></Card.Title>
                        <Card.Text>
                            <h5>Co-Writer</h5>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, earum.</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card className="executives">
                    <Card.Img variant="top" src={person1} />
                    <Card.Body>
                        <Card.Title><h3>Jackie Sars</h3></Card.Title>
                        <Card.Text>
                            <h5>Co-Writer</h5>
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

