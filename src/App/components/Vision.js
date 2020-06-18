import React from 'react'
import preaching from './images/preaching.jpg'

const Vision = () => {
    return(
            <div className="container vision">
                <div className='row'>

                <div classname='col-md-6'>
                    <img  src={preaching} alt="" /> 
                </div>

                <div className=' col-md-6 col-xs-6col-sm-6'>
                    <h2 className="text-center">Vision and  Mission</h2>
                    <p>C3 Alive  is a church that is fresh, real, powerful,and has
                    at its heart the Great Commission to win souls and make 
                    disciples of all nations. A church that impacts the city and 
                    influences the nations towards Jesus Christ. A church that has
                     a culture and atmosphere of faith, hope, and love. A church that
                    develops leaders and empowers people to become all that God had 
                    purposed and destined for their lives.</p>
                </div>


                </div>
            </div>

    )
}



export default Vision