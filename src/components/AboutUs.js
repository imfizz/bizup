import React from 'react'

function AboutUs() {
  return (
    <div className="aboutus">
        <div className="left">
            <img src="../images/aboutdot.png" alt="" />
            <img src="../images/about.jpg" alt="" />
            <img src="../images/aboutcircle.png" alt="" />
        </div>
        <div className="right">
            <h3>ABOUT US</h3>
            <h1>We are crafting your unique business consulting ideas</h1>
            <p>We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms.</p>
            <details>
                <summary>Responsive & Pixel Perfect Design</summary>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo data communication.
            </details>
            <details>
                <summary>Elementor Page Builder Used</summary>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo data center and analytics.
            </details>
        </div>
    </div>
  )
}

export default AboutUs