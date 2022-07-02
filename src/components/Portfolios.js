import React from 'react'
import { useHorizontalScroll } from "./UseHorizontalScroll";

function Portfolios() {
  const scrollRef = useHorizontalScroll();

  return (
    <div className="portfolios">
        <div className="p-head">
            <h3>PROJECTS</h3>
            <div className="title">
                <h2>Recent Portfolios</h2>
                <button type="button">View Projects</button>
            </div>
        </div>
        <div className="p-cards-container" ref={scrollRef}>
            <div className="p-card" style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('../images/portfolio1.webp')"}}>
                <div className="p-card-content">
                    <span>Investment</span>
                    <h3>Business Planning</h3>
                </div>
            </div>
            <div className="p-card" style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('../images/portfolio2.webp')"}}>
                <div className="p-card-content">
                    <span>Investment</span>
                    <h3>Strength Solutions</h3>
                </div>
            </div>
            <div className="p-card" style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('../images/portfolio3.webp')"}}>
                <div className="p-card-content">
                    <span>Business Strategy</span>
                    <h3>Business Analytics</h3>
                </div>
            </div>
            <div className="p-card" style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('../images/portfolio4.webp')"}}>
                <div className="p-card-content">
                    <span>Business Strategy</span>
                    <h3>Stock Market Analysis</h3>
                </div>
            </div>
            <div className="p-card" style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('../images/portfolio5.webp')"}}>
                <div className="p-card-content">
                    <span>Financial</span>
                    <h3>Sales Analysis</h3>
                </div>
            </div>
            <div className="p-card" style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('../images/portfolio6.webp')"}}>
                <div className="p-card-content">
                    <span>Tax Consulting</span>
                    <h3>Stock Investments</h3>
                </div>
            </div>
            <div className="p-card" style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('../images/portfolio7.webp')"}}>
                <div className="p-card-content">
                    <span>Business Strategy</span>
                    <h3>Advertising Technology</h3>
                </div>
            </div>
            <div className="p-card" style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('../images/portfolio8.webp')"}}>
                <div className="p-card-content">
                    <span>Tax Consulting</span>
                    <h3>Big Data Services</h3>
                </div>
            </div>
            <div className="p-card" style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('../images/portfolio9.webp')"}}>
                <div className="p-card-content">
                    <span>Investment</span>
                    <h3>Business Planning</h3>
                </div>
            </div>
        </div>

        <div className="buttons">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
  )
}

export default Portfolios