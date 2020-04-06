import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import person1 from './images/person1.jpg'

const Testimonials = () => {
    return(
        <Container className="testimonials">
            <h1>Testimonials</h1>
            <p class="text-center">Lorem ipsum dolor sit amet.</p>
            <Row>
                <Col className='text-center testimony'>
                    <div className="profile">
                        <img src={person1} alt="person1" className="user" />
                        <blockquote>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem nobis quis repudiandae omnis cupiditate neque!</blockquote>
                        <h3>Kato Ernest Henry</h3>
                        <p><span>Software Developer</span></p>
                    </div>
                </Col>

                <Col className='text-center testimony'>
                <div className="profile">
                    <img src={person1} alt="person1" className="user" />
                    <blockquote>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem nobis quis repudiandae omnis cupiditate neque!</blockquote>
                    <h3>Nakawunde Annet </h3>
                    <p><span>Leader at Prayer Service</span></p>
                </div>
                </Col>

                <Col className='text-center testimony'>
                <div className="profile">
                    <img src={person1} alt="person1" className="user" />
                    <blockquote>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem nobis quis repudiandae omnis cupiditate neque!</blockquote>
                    <h3>Dr Kimpi Henry </h3>
                    <p><span>Co-founder at Namuwongo</span></p>
                </div>
                </Col>

            </Row>

        </Container>


    )
}


export default Testimonials