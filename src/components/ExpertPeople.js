import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// images
import Expert1 from '../images/expert1.webp'
import Expert2 from '../images/expert2.webp'
import Expert3 from '../images/expert3.webp'
import Expert4 from '../images/expert4.webp'

function ExpertPeople() {
  return (
    <div className="expert-people">
        <div className="e-headline">
            <h3>EXPERT PEOPLE</h3>
            <h2>Our Team Members</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod data tempor incididunt ut labore et dolore magna.</p>
        </div>
        <div className="e-circles-container">
            <div className="circle">
                <img src={Expert1} alt="Expert" />
                <h3>Mike Jason</h3>
                <p>Business Advisor</p>
                <div className="circle-icons">
                    <FacebookIcon className="expert-icon" />
                    <InstagramIcon className="expert-icon" />
                    <TwitterIcon className="expert-icon" />
                    <LinkedInIcon className="expert-icon" />
                </div>
            </div>
            <div className="circle">
                <img src={Expert2} alt="Expert" />
                <h3>Francis Ibikunle</h3>
                <p>Senior Consultant</p>
                <div className="circle-icons">
                    <FacebookIcon className="expert-icon" />
                    <InstagramIcon className="expert-icon" />
                    <TwitterIcon className="expert-icon" />
                    <LinkedInIcon className="expert-icon" />
                </div>
            </div>
            <div className="circle">
                <img src={Expert3} alt="Expert" />
                <h3>Corey Anderson</h3>
                <p>Assistant Director</p>
                <div className="circle-icons">
                    <FacebookIcon className="expert-icon" />
                    <InstagramIcon className="expert-icon" />
                    <TwitterIcon className="expert-icon" />
                    <LinkedInIcon className="expert-icon" />
                </div>
            </div>
            <div className="circle">
                <img src={Expert4} alt="Expert" />
                <h3>Mike Jason</h3>
                <p>Business Manager</p>
                <div className="circle-icons">
                    <FacebookIcon className="expert-icon" />
                    <InstagramIcon className="expert-icon" />
                    <TwitterIcon className="expert-icon" />
                    <LinkedInIcon className="expert-icon" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ExpertPeople