import React from 'react'
import Card from 'react-bootstrap/Card'
import benson from './images/benson.jpg'
import Neghema from './images/Neghema.jpg'
import annet from './images/annet.jpg'
import fabian from './images/fabian.jpg'


const ExecutiveTeam = () => {
    return(
        <div className='container text-center executive-teams'>
         <h2 className="text-center">The Executive Team</h2>
        <p className="mt-3 text-center" style={{"font-size":"20px"}}>Meet our Location Directors across  four locations</p>
        <div className="row mb-5">
            <div className='col-sm-6 col-xs-6 col-md-3'>
                <Card  className="executives">
                    <Card.Img variant="top" src={annet} className="image"/>
                    <Card.Body>
                        <Card.Title><h3 style={{"font-size": "18px"}}>Pastor Annet</h3></Card.Title>
                        <Card.Text>
                        <h6>Director - C3 Alive Kabalagala</h6>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, earum.</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            
            </div>
        
            <div className='col-sm-6 col-xs-6 col-md-3'>
                <Card className="executives">
                    <Card.Img variant="top" src={Neghema} />
                    <Card.Body>
                        <Card.Title><h3 style={{"font-size": "18px"}}>Neghema</h3></Card.Title>
                        <Card.Text>
                        <h6>Director - C3 Alive Bwera</h6>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, earum.</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div className='col-sm-6 col-xs-6 col-md-3'>
                <Card className="executives">
                    <Card.Img variant="top" src={benson} />
                    <Card.Body>
                        <Card.Title><h3 style={{"font-size": "18px"}}>Benson</h3></Card.Title>
                        <Card.Text>
                        <h6>Director - C3 Alive Kasese</h6>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, earum.</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className='col-sm-6 col-xs-6 col-md-3'>
                <Card className="executives">
                    <Card.Img variant="top" src={fabian} />
                    <Card.Body>
                        <Card.Title><h3 style={{"font-size": "18px"}}>Anne Ssemugenyi</h3></Card.Title>
                        <Card.Text>
                        <h6>Director - C3 Alive Matugga</h6>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, earum.</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            </div>
        </div>
    
    )
}

export default ExecutiveTeam;

