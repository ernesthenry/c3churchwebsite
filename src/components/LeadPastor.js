import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import rock  from './images/rock.jpg'

const LeadPastor = () => {
    return(
        <div>
            <Container className="lead">
                <Row>
                    <Col sm={4}>
                        <img src={rock}  alt="pastor"  className="pastor"/>

                    </Col>

                    <Col sm={8}>
                    <h2 className="text-center">Rock and Deborah's Story </h2>
                    <p>
                    Rock  and Deborah met in Kasese, Uganda when Rock was serving as youth pastor for the church Leanne attended. After Jurgen went to Hillsong College, 
                    he moved to New Zealand as part of a Hillsong church plant. After six months of running the youth ministry at South City Christian Life Centre, Jurgen traveled back to Australia to marry his sweetheart Leanne!! After their wedding and some tearful goodbye’s to family and friends, Jurgen and Leanne traveled back to NZ to resume pastoring the youth at South City Christian Life Centre.
                    </p>

                    <p>During the seven years they were in New Zealand, Jurgen and Leanne had a profound and long lasting impact on the city of Auckland especially amongst its youth. Jurgen had become a popular speaker in colleges
                    and high schools and had grown and developed the youth ministry at South City CLC to make it one of the largest in the nation at that time. 
                     </p>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}



export default LeadPastor