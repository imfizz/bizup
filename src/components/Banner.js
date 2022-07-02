import React from 'react'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

function Banner() {
  return (
    <div className="banner">
        <div className="content">
            <h2>BUSINESS CONSULTING</h2>
            <h1>We grow & manage your business</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
            <button type="button">Get Started</button>
        </div>

        <div className="prev"><ArrowBackIosRoundedIcon /></div>
        <div className="next"><ArrowForwardIosRoundedIcon /></div>
    </div>
  )
}

export default Banner