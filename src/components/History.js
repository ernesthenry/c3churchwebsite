import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import worship from './images/worship.jpg'

const History = () => {
    return(
        <div>
            <Container className="history">
                <Row>
                    <Col>
                    <img  src={worship} alt="images"/>
                    
                    </Col>

                    <Col>
                    <h2 className="text-center">History </h2>
                    <p>C3 Alive  is a church that is fresh, real, powerful,and has
                    at its heart the Great Commission to win souls and make 
                    disciples of all nations. A church that impacts the city and 
                    influences the nations towards Jesus Christ. A church that has
                     a culture and atmosphere of faith, hope, and love. A church that
                    develops leaders and empowers people to become all that God had 
                    purposed and destined for their lives.</p>
                    

                    </Col>
                </Row>
            </Container>


        </div>
    )
}



export default History;

