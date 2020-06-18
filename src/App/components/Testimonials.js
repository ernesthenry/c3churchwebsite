import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ernest from './images/ernest.jpg'
import testimony1 from './images/testimony1.jpg'
import testimony2 from './images/testimony2.jpg'

const Testimonials = () => {
    return(
        <Container className="testimonials">
            <h1>Testimonials</h1>
            <p class="text-center">Lorem ipsum dolor sit amet.</p>
            <Row>
                <Col className='text-center testimony'>
                    <div className="profile">
                        <img src={ernest} alt="ernest" className="user" />
                        <blockquote>My life changed when i joined C3 Alive. Before i was a drug addict. I got redeemed and my life has never been the same.</blockquote>
                        <h3>Kato Ernest Henry</h3>
                        <p><span>Software Developer</span></p>
                    </div>
                </Col>

                <Col className='text-center testimony'>
                <div className="profile">
                    <img src={testimony1} alt="person1" className="user" />
                    <blockquote>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem nobis quis repudiandae omnis cupiditate neque!</blockquote>
                    <h3>Suzan </h3>
                    <p><span>Connect Group Leader</span></p>
                </div>
                </Col>

                <Col className='text-center testimony'>
                <div className="profile">
                    <img src={testimony2} alt="person1" className="user" />
                    <blockquote>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem nobis quis repudiandae omnis cupiditate neque!</blockquote>
                    <h3>Mr. Luutu Jjaja </h3>
                    <p><span>Teacher at Namugongo</span></p>
                </div>
                </Col>

            </Row>

        </Container>


    )
}


export default Testimonials