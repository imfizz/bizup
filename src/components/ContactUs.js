import React from 'react'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';

function ContactUs() {
  return (
    <div className="contact-us">
        <div className="form-container">
            <form>
                <h3>CONTACT US</h3>
                <h2>Get In Touch</h2>
                <div className="inputs">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="E-mail" />
                    <input type="text" placeholder="Phone Number" />
                    <input type="text" placeholder="Your Website" />
                    <textarea placeholder="Your Message Here"/>
                </div>
                <button type="submit">Submit Now</button>
            </form>
            <div className="contact-info">
                <h2>Contact Info</h2>
                <div className="contact-col-container">
                    <div className="contact-col">
                        <div className="contact-circle">
                            <MapOutlinedIcon />
                        </div>
                        <div className="contact-details">
                            <h4>USA Office</h4>
                            <span>127 Double Street, Dublin, United Kingdom.</span>
                        </div>
                    </div>
                    <div className="contact-col">
                        <div className="contact-circle">
                            <PhoneIcon />
                        </div>
                        <div className="contact-details">
                            <h4>Telephone</h4>
                            <span>p: (+123) 555 8888</span>
                            <span>p: (+123) 555 8899</span>
                        </div>
                    </div>
                    <div className="contact-col">
                        <div className="contact-circle">
                            <EmailIcon />
                        </div>
                        <div className="contact-details">
                            <h4>Mail Us</h4>
                            <span>E: support@rstheme.com</span>
                            <span>E: info@codesless.com</span>
                        </div>
                    </div>
                    <div className="contact-col">
                        <div className="contact-circle">
                            <QueryBuilderIcon />
                        </div>
                        <div className="contact-details">
                            <h4>Opening Hours</h4>
                            <span>Mon-Fri: 10:00-18:00</span>
                            <span>Sat-Sun: 10:00-14:00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs