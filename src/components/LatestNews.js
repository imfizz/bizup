import React from 'react'
import PersonIcon from '@mui/icons-material/Person'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

function LatestNews() {
  return (
    <div className="latestnews">
        <div className="l-headline">
            <h3>LATEST NEWS</h3>
            <div className="l-title">
                <h2>Read Latest Updates</h2>
                <button type="button">View Updates</button>
            </div>
            <div className="l-card-container">
                <div className="l-card">
                    <img src="../images/latestnews.webp" alt="" />
                    <div className="datetime">
                        <span>
                            <PersonIcon style={{color: "#0082f1", transform: "translateY(5px)"}} />
                            admin
                        </span>
                        <span>
                            <CalendarMonthIcon style={{color: "#0082f1", transform: "translateY(5px)"}} />
                            05 May 2021
                        </span>
                    </div>
                    <h3>Customer onboarding there business classes</h3>
                    <p>We denounce with righteous indige nation and dislike men who are so beguiled...</p>
                </div>
                <div className="l-card">
                    <img src="../images/latestnews2.webp" alt="" />
                    <div className="datetime">
                        <span>
                            <PersonIcon style={{color: "#0082f1", transform: "translateY(5px)"}} />
                            admin
                        </span>
                        <span>
                            <CalendarMonthIcon style={{color: "#0082f1", transform: "translateY(5px)"}}/>
                            05 May 2021
                        </span>
                    </div>
                    <h3>How investing in dependend increasing to business</h3>
                    <p>We denounce with righteous indige nation and dislike men who are so beguiled...</p>
                </div>
                <div className="l-card">
                    <img src="../images/latestnews3.webp" alt="" />
                    <div className="datetime">
                        <span>
                            <PersonIcon style={{color: "#0082f1", transform: "translateY(5px)"}}/>
                            admin
                        </span>
                        <span>
                            <CalendarMonthIcon style={{color: "#0082f1", transform: "translateY(5px)"}}/>
                            05 May 2021
                        </span>
                    </div>
                    <h3>7 Productivity tips to avoid burnout when working</h3>
                    <p>We denounce with righteous indige nation and dislike men who are so beguiled...</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LatestNews