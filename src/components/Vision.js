import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import preaching from './images/preaching.jpg'


const Vision = () => {
    return(
        <div>
            <Container className="vision">
                <Row>
                    <Col>
                    <h2 className="text-center">Vision and  Mission</h2>
                    <p>C3 Alive  is a church that is fresh, real, powerful,and has
                    at its heart the Great Commission to win souls and make 
                    disciples of all nations. A church that impacts the city and 
                    influences the nations towards Jesus Christ. A church that has
                     a culture and atmosphere of faith, hope, and love. A church that
                    develops leaders and empowers people to become all that God had 
                    purposed and destined for their lives.</p>
                    </Col>

                    <Col>
                    <img  src={preaching} alt="" />
                    

                    </Col>
                </Row>
            </Container>


        </div>
    )
}



export default Vision