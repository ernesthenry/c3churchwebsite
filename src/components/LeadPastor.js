import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
// import preacher1  from './images/preacher1.jpg'

const LeadPastor = () => {
    return(
        <div>
            <Container className="lead">
                <Row>
                    <Col sm={4}>
                        {/* <img src={preacher1}  alt="pastor"  className="pastor"/> */}

                    </Col>

                    <Col sm={8}>
                    <h1>Rock and Deborah's Sory </h1>
                    <p>
                    Jurgen and Leanne met in Sydney, Australia when Jurgen was serving as youth pastor for the church Leanne attended. After Jurgen went to Hillsong College, 
                    he moved to New Zealand as part of a Hillsong church plant. After six months of running the youth ministry at South City Christian Life Centre, Jurgen traveled back to Australia to marry his sweetheart Leanne!! After their wedding and some tearful goodbye’s to family and friends, Jurgen and Leanne traveled back to NZ to resume pastoring the youth at South City Christian Life Centre.
                    </p>

                    <p>During the seven years they were in New Zealand, Jurgen and Leanne had a profound and long lasting impact on the city of Auckland especially amongst its youth. Jurgen had become a popular speaker in colleges
                    and high schools and had grown and developed the youth ministry at South City CLC to make it one of the largest in the nation at that time. They had also welcomed their first two “kiwi” sons Jordan and Ashley. In 
                    the summer of 1998 Jurgen and Leanne felt a strong call from God to move back to Australia. They sold their home and packed up their boys and belongings and planted themselves in one of Australia’s most incredible
                     churches, C3 Church Oxford Falls

                    
                    Under the amazing leadership of Pastors Phil & Chris Pringle they were appointed as 
                    youth pastors. In the fall of 2001 they welcomed Tommy, their third son and presumably their 
                    third and final child! In the seven years they were part of the team at C3 Oxford Falls Jurgen
                    </p>
                  
                    



                    

                    </Col>
                </Row>
            </Container>


        </div>
    )
}



export default LeadPastor