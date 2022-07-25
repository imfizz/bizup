import React from 'react'

// icons
import Bag from '../images/icons/bag.png'
import Municipality from '../images/icons/municipality.png'
import Umbrella from '../images/icons/umbrella.png'
import PieChart from '../images/icons/piechart.png'
import Graph from '../images/icons/graph.png'
import PieMobile from '../images/icons/piemobile.png'

function ValuedServices() {
  return (
    <div className="valued-services">
        <div className="v-headline">
            <h3>VALUED SERVICES</h3>
            <h2>Managed IT, Software, Voice & Data Services for Your Organization</h2>
        </div>
        <div className="v-cards-container">
            <div className="v-cards">
                <img src={Bag} alt="Bag Icon" />
                <h4>Business Planning</h4>
                <p>We denounce with righteous indig onto nation and dislike men who are so beguiled and demo data.</p>
                <button type="button">View More</button>
            </div>

            <div className="v-cards">
                <img src={Municipality} alt="Municipality Icon" />
                <h4>Tax Strategy</h4>
                <p>We denounce with righteous indig onto nation and dislike men who are so beguiled and demo data.</p>
                <button type="button">View More</button>
            </div>

            <div className="v-cards">
                <img src={Umbrella} alt="Umbrella Icon" />
                <h4>Insurance Strategy</h4>
                <p>We denounce with righteous indig onto nation and dislike men who are so beguiled and demo data.</p>
                <button type="button">View More</button>
            </div>

            <div className="v-cards">
                <img src={PieChart} alt="Pie Chart Icon" />
                <h4>Manage Investment</h4>
                <p>We denounce with righteous indig onto nation and dislike men who are so beguiled and demo data.</p>
                <button type="button">View More</button>
            </div>

            <div className="v-cards">
                <img src={Graph} alt="Graph Icon" />
                <h4>Start Ups</h4>
                <p>We denounce with righteous indig onto nation and dislike men who are so beguiled and demo data.</p>
                <button type="button">View More</button>
            </div>

            <div className="v-cards">
                <img src={PieMobile} alt="Pie Mobile Icon" />
                <h4>Financial Advices</h4>
                <p>We denounce with righteous indig onto nation and dislike men who are so beguiled and demo data.</p>
                <button type="button">View More</button>
            </div>
        </div>
    </div>
  )
}

export default ValuedServices