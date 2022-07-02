import React from 'react'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded'

function ChooseUs() {
  return (
    <div className="chooseus">
        <div className="c-left">
            <div className="chooseus-img"></div>
            <div className="pulse">
                <PlayArrowRoundedIcon style={{fontSize: "30px"}}/>
            </div>
        </div>
        <div className="c-right">
            <h3>WHY CHOOSE US</h3>
            <h2>A right choice that makes the difference to others</h2>
            <p>We donec pulvinar magna id leoersi pellentesque impered upon dignissim rhoncus euismod euismod eros vitae.</p>

            <div className="percentages">
                <div className="progress-container">
                    <div className="progress-title">
                        <h4>Business Planning</h4>
                        <span>92%</span>
                    </div>
                    <div className="progress-bar p1"></div>
                </div>
                <div className="progress-container">
                    <div className="progress-title">
                        <h4>Financial Advices</h4>
                        <span>90%</span>
                    </div>
                    <div className="progress-bar p2"></div>
                </div>
                <div className="progress-container">
                    <div className="progress-title">
                        <h4>Investment Strategy</h4>
                        <span>85%</span>
                    </div>
                    <div className="progress-bar p3"></div>
                </div>
                <div className="progress-container">
                    <div className="progress-title">
                        <h4>Business Security</h4>
                        <span>95%</span>
                    </div>
                    <div className="progress-bar p4"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChooseUs