import React from 'react'
import logoc3 from './images/logoc3.png'

const Footer = () => (
    

    <React.Fragment>
        <div id="contact">
        <footer>
            <div className="row justify-content-center">
                <div className="col-md-5 col-sm-5 col-lg-5 text-center">
                    <img src={logoc3} alt="logo" />
                    <p>C3 Alive is a Ugandan region office part of the C3 Global movement. We are
                        committed to healthy relationships and connection between ministers and
                        churches. We
                        are part of an international family, our members are able to walk into any of
                        our C3
                        Churches around the world and know they’re home. We are united with Christ in
                        His
                        vision, and therefore our mission, to save the lost, make disciples and build
                        His
                        church.</p>
                    <button className="btn btn-outline-light" data-toggle="modal"
                        data-target="#contactModal">MESSAGE
                        THE TEAM</button><br />
                    <strong>Contact Info</strong>
                    <p>(+256)-800-250-914<br />c3alive@gmail.com</p>
                    
                </div>
                <hr className="socket bg-dark"  />
                &copy; 2020 C3 ALIVE. All Rights Reserved
            </div>
        </footer>
</div>

    <div className="modal fade text-dark" id="contactModal">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="contactModalTitle">Contact Us</h5>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="form-group">
                            <label for="name">Name</label>
                            <input type="text" required class="form-control" id="userName" />
                        </div>
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="userEmail" required class="form-control" />
                        </div>
                        <div className="form-group">
                            <label for="message">Message</label>
                            <textarea required class="form-control" id="userMessage"></textarea>
                        </div>
                        <div className="modal-footer">
                          <button  className="btn btn-primary btn-block" type='submit' role="button">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

</React.Fragment>
   
 
)

export default Footer;