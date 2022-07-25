import React from 'react'

function Testimonials() {
  return (
    <div className="testimonials">
        <div className="t-headline">
            <h3>TESTIMONIALS</h3>
            <h2>Customers Reviews</h2>
        </div>
        <div className="t-cards-container">
            <div className="card">
                <img src="../images/testimonials-person1.jpg" alt="" />
                <i>"Customer support is excellent and documentation good – novice can easily understand. Although I had a problem with the performance, thanks to the customer support, we have solved this problem as well."</i>
                <h3>David Warner</h3>
                <span>Envato User</span>
            </div>
            <div className="card">
                <img src="../images/testimonials-person2.jpg" alt="" />
                <i>"These guys are awesome! Each time I needed their help, their response was quick and very helpful. Also, the theme is very flexible. Five stars from me for everything! I truly recommend this theme!!!"</i>
                <h3>Johnis Kobra</h3>
                <span>Envato User</span>
            </div>
            <div className="card">
                <img src="../images/testimonials-person3.jpg" alt="" />
                <i>"The theme is fine. It is customizable and its demos are great. The education plugin also works fine. But, although I like it so much, I want to point out a few shortcomings. Theme is appropriate, I agree."</i>
                <h3>Mina Mondal</h3>
                <span>Envato User</span>
            </div>
        </div>
    </div>
  )
}

export default Testimonials