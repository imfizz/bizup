import React from 'react'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import CallOutlinedIcon from '@mui/icons-material/CallOutlined'
import SearchIcon from '@mui/icons-material/Search'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'

function Navbar() {

  const topIcons = {
    fontSize: "40px",
    color: "#0082f1"
  }

  const searchStyle = {
    color: "#333",
    fontSize: "30px",
    cursor: "pointer"
  }

  const menuStyle = {
    color: "#0082f1",
    fontSize: "40px",
    cursor: "pointer"
  }

  return (
    <header>
        <div className="top-head">
            <a href="/"><img src="../images/logoblue.png" className="logo" alt="logo" /></a>
            <ul>
                <li>
                    <MapOutlinedIcon style={topIcons} />
                    <div>
                        <b>Location</b>
                        <span>55 Gerad Lane, NY 11201, USA</span>
                    </div>
                </li>
                <li>
                    <EmailOutlinedIcon style={topIcons} />
                    <div>
                        <b>Mail us</b>
                        <span>info@bizup.com</span>
                    </div>
                </li>
                <li>
                    <CallOutlinedIcon style={topIcons} />
                    <div>
                        <b>Call us</b>
                        <span>(+1) 9999 999 999</span>
                    </div>
                </li>
            </ul>
        </div>

        <nav className="notmobile">
            <ul>
                <li>Home
                    <ul>
                        <li>Multipages</li>
                        <li>Onepages</li>
                    </ul>
                </li>
                <li>Pages
                    <ul>
                        <li>About</li>
                        <li>Shop</li>
                        <li>Pricing Table</li>
                        <li>Team</li>
                        <li>Appointment</li>
                        <li>Careers</li>
                        <li>Faqs</li>
                        <li>Partners</li>
                    </ul>
                </li>
                <li>Portfolios
                    <ul>
                        <li>Portfolio One</li>
                        <li>Portfolio Two</li>
                        <li>Portfolio Three</li>
                        <li>Portfolio Four</li>
                        <li>Portfolio Five</li>
                        <li>Portfolio Six</li>
                        <li>Portfolio Seven</li>
                        <li>Portfolios Filter</li>
                    </ul>
                </li>
                <li>Services
                    <ul>
                        <li>Services Style 1</li>
                        <li>Services Style 2</li>
                        <li>Business Planning</li>
                        <li>Tax strategy</li>
                        <li>Financial advices</li>
                        <li>Insurance strategy</li>
                        <li>Start ups</li>
                        <li>Manage Investment</li>
                    </ul>
                </li>
                <li>Blog</li>
                <li>Contact
                    <ul>
                        <li>Contact 1</li>
                        <li>Contact 2</li>
                        <li>Contact 3</li>
                    </ul>
                </li>
            </ul>

            <div className="nav-icons-container">
                <SearchIcon className="nav-icon" />
                <FacebookIcon className="nav-icon"  />
                <TwitterIcon className="nav-icon" />
                <InstagramIcon className="nav-icon" />
            </div>
        </nav>

        <nav className="mobile">
            <a href="/">
                <img src="../images/logoblue.png" alt="" />
            </a>

            <div className="rightSideNav">
                <SearchIcon style={searchStyle} />
                <DragHandleIcon style={menuStyle} />
            </div>
        </nav>
    </header>
  )
}

export default Navbar