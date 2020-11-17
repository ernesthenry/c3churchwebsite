import React from 'react'
import Card from 'react-bootstrap/Card'
import wairege from './images/wairege.jpg'
import fabian from './images/fabian.jpg'
import chris from './images/chris.jpg'
import edwin from './images/edwin.jpg'

const LocationPastors = () => {
    return(
        <div className='container location-pastors'>
                <h2>Location Pastors</h2>
                <p className="mt-3 text-center" style={{"font-size": "20px", fontWeight: 'bold'}}>Meet our location pastors across four locations in Uganda</p>    
                <div className="row mb-5">
                    <div className='col-xs-6 col-md-3'>
                        <div className="location-pastor">
                            <img src={edwin} className="img-fluid rounded-circle w-50 mb-3"/>
                            <h3>Masereka Edwin</h3>
                            <h5><i>Location Pastor - Kabalagala</i></h5>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, earum.</p>
                        
                            <div className="d-flex flex-row justify-content-center">
                                <div className="p-4">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                </div>
                                <div className="p-4">
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                </div>
                                <div className="p-4">
                                    <a href="#"><i className="fa fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
            
                    <div className='col-xs-6 col-md-3'>
                        <div className="location-pastor">
                            <img src={wairege} className="img-fluid rounded-circle w-50 mb-3"/>
                            <h3>Wairege Ahmed</h3>
                            <h5><i>Location Pastor - Bwera</i></h5>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, earum.</p>
                            <div className="d-flex flex-row justify-content-center">
                                <div className="p-4">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                </div>
                                <div className="p-4">
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                </div>
                                <div className="p-4">
                                    <a href="#"><i className="fa fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        </div>
            
            
                    <div className='col-xs-6 col-md-3'>
                        <div className="location-pastor">
                            <img src={chris} className="img-fluid rounded-circle w-50 mb-3"/>
                            <h3>Chris</h3>
                            <h5><i>Location Pastor - Kasese</i></h5>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, earum.</p>
                            <div className="d-flex flex-row justify-content-center">
                                <div className="p-4">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                </div>
                                <div className="p-4">
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                </div>
                                <div className="p-4">
                                    <a href="#"><i className="fa fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
            
                    <div className='col-xs-6 col-md-3'>
                        <div className="location-pastor">
                            <img src={fabian} className="img-fluid rounded-circle w-50 mb-3"/>
                            <h3>Fabian Ssemugenyi</h3>
                            <h5><i>Location Pastor - Matugga</i></h5>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, earum.</p>
                            <div className="d-flex flex-row justify-content-center">
                                <div className="p-4">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                </div>
                                <div className="p-4">
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                </div>
                                <div className="p-4">
                                    <a href="#"><i className="fa fa-instagram"></i></a>
                                </div>
                            </div>     
                        </div>
                    </div>
            

            </div>

            </div>

    
    )
}

export default LocationPastors;

