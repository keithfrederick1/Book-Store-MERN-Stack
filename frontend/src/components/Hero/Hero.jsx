import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
   <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container ">
            {/* left side */}
            <div className="hero-left">
                <div className="hero-title">
                    <h1 className="text-3xl my-8">LongevityRx <br/>
                    Injectable Antipsychotic Directory</h1>
                </div>
                <div className="hero-description">
                   <span>Online platform for long term injectable anti-psychotic medications</span> 
                   <br/>
                   <div className="searchbar">Search Bar</div>
                </div>
            </div>
            {/* right side */}
            <div className="hero-right">
                <div className="image-container">
                    <img src="./longevity.png" alt=""/>
                </div>
            </div>
        </div>
   </section>
  )
}

export default Hero
