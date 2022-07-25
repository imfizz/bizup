import React from 'react'

// icons
import Income from '../images/icons/income.png'
import Note from '../images/icons/note.png'
import Chart from '../images/icons/chart.png'
import Calculator from '../images/icons/calculator.png'

function Services() {
    
  return (
    <div className="services">
        <div className="headline">
            <h3>MANAGED SERVICES</h3>
            <h1>More than 30+ years we improve business consulting</h1>
        </div>
        <div className="cards-container">
            <div className="card">
                <img src={Income} alt="Income Icon" />
                <h4>Financial planning</h4>
                <p>We always provide people a complete solution upon focused of any business.</p>
            </div>
            <div className="card">
                <img src={Note} alt="Note Icon" />
                <h4>Training services</h4>
                <p>We always provide people a complete solution upon focused of any business.</p>
            </div>
            <div className="card">
                <img src={Chart} alt="Chart Icon" />
                <h4>Marketing services</h4>
                <p>We always provide people a complete solution upon focused of any business.</p>
            </div>
            <div className="card">
                <img src={Calculator} alt="Calculator Icon" />
                <h4>Taxation services</h4>
                <p>We always provide people a complete solution upon focused of any business.</p>
            </div>
        </div>
    </div>
  )
}

export default Services