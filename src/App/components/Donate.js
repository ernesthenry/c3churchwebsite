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
                <div className="text-center" style={{"font-size": "20px"}}>
                <h2 style={{"font-variant": "small-caps"}}>THANK YOU FOR YOUR GENEROSITY</h2>
                <p>Your contribution is making a difference. Your support helps
                    reach the lost and build the church. If you would like to contribute financially, click the button below to our secure payment
                    gateway.</p>
                    <a href="#" className="btn btn-primary btn-lg showcase-btn">ONLINE GIVING</a><br />
                    <a href="#" className="pt-2 " style={{"font-size":"20px", "text-decoration": "none"}}>TEN REASONS WHY I
                        BELIEVE IN GIVING</a>

                </div>
               
            </Jumbotron>

            </Col>
            </Row>

        </Container>

    )
}

export default Donate;