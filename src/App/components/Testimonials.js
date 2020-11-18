import React from 'react'
import ernest from './images/ernest.jpg'
import testimony1 from './images/testimony1.jpg'
import testimony2 from './images/testimony2.jpg'

const Testimonials = () => {
    return(
        <div className='container'>
            <div className="testimonials">
            <h1>Testimonials</h1>
            <p class="text-center" style={{fontWeight:'bold'}}>Awesome testimonies from our own members.</p>
            <div className='row'>
                <div className='col-sm-6 col-xs-6 col-md-4 text-center testimony'>
                    <div className="profile">
                        <img src={ernest} alt="ernest" className="user" />
                        <blockquote>My life changed when i joined C3 Alive. Before i had less knolwedge about the kingdom of God. I got redeemed and my life has never been the same.</blockquote>
                        <h3>Kato Ernest Henry</h3>
                        <p><span>Software Developer</span></p>
                    </div>
                </div>

                <div className='col-sm-6 col-xs-6 col-md-4 text-center testimony'>
                <div className="profile">
                    <img src={testimony1} alt="person1" className="user" />
                    <blockquote>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem nobis quis repudiandae omnis cupiditate neque!</blockquote>
                    <h3>Suzan </h3>
                    <p><span>Connect Group Leader</span></p>
                </div>
                </div>

                <div className='col-sm-6 col-xs-6 col-md-4 text-center testimony'>
                <div className="profile">
                    <img src={testimony2} alt="person1" className="user" />
                    <blockquote>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem nobis quis repudiandae omnis cupiditate neque!</blockquote>
                    <h3>Mr. Luutu Jjaja </h3>
                    <p><span>Teacher at Namugongo</span></p>
                </div>
                </div>

            </div>

        </div>

        </div>
        


    )
}


export default Testimonials