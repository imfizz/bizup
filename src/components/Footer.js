import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import PinterestIcon from '@mui/icons-material/Pinterest'
import InstagramIcon from '@mui/icons-material/Instagram'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';


function Footer() {
  return (
    <div className="footer">
        <div className="grid-4">
            <div className="company-details">
                <a href="/"><div className="company-logo"></div></a>
                <p>We denounce with righteous indig nation in and dislike men who are so beguiled and to demo realized by the, so blinded by desire, that they cannot foresee.</p>
                <div className="company-icons-footer">
                    <div className="icon">
                        <FacebookIcon />
                    </div>
                    <div className="icon">
                        <TwitterIcon />
                    </div>
                    <div className="icon">
                        <PinterestIcon />
                    </div>
                    <div className="icon">
                        <InstagramIcon />
                    </div>
                </div>
            </div>
            <div className="our-services-footer">
                <h3>OUR SERVICES</h3>
                <div className="small-border"></div>
                <p>Business planning</p>
                <p>Tax strategy</p>
                <p>Financial services</p>
                <p>Insurance strategy</p>
                <p>Manage investment</p>
            </div>
            <div className="contact-info-footer">
                <h3>CONTACT INFO</h3>
                <div className="small-border"></div>
                <div className="contact-container">
                    <div className="contact-icon">
                        <MapOutlinedIcon />
                    </div>
                    <span>Ta-134/A, Gulshan Badda Link Rd, Dhaka</span>
                </div>
                <div className="contact-container">
                    <div className="contact-icon">
                        <PhoneIcon />
                    </div>
                    <span>(+880)155 69569 365</span>
                </div>
                <div className="contact-container">
                    <div className="contact-icon">
                        <EmailIcon />
                    </div>
                    <span>support@rstheme.com</span>
                </div>
                <div className="contact-container">
                    <div className="contact-icon">
                        <QueryBuilderIcon />
                    </div>
                    <span>Office Hours: 8AM - 11PM</span>
                </div>
            </div>
            <div className="newsletter">
                <h3>NEWSLETTER</h3>
                <div className="small-border"></div>
                <p>Stay up to update with our latest news and products.</p>
                <form>
                    <input type="email" placeholder="Your email address"/>
                    <button type="submit">SUBSCRIBE NOW</button> 
                </form>
            </div>
        </div>
        <div className="finalfooter">
            <p>© 2021 Bizup - Consulting Company Inc. All Rights Reserved.</p>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Faqs</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer