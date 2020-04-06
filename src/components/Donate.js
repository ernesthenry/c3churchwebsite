import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

const Donate = () => {
    return(
        <Container>
            <Row>
            <Col>
            <Jumbotron>
                <h1>Your support is changing lives.</h1>
                <p>This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.</p>
                <p><Button variant="primary">Donate</Button></p>
            </Jumbotron>

            </Col>
            </Row>

        </Container>

    )
}

export default Donate;