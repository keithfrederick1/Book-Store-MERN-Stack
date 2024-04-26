import React from 'react'
import './Hero.css'
import SearchBar from './Searchbar'

const Hero = () => {
  return (
   <section className="hero-wrapper">
        <div className="paddings innerWidth flexStart hero-container ">
            {/* left side */}
            <div className="hero-left">
                <div className="hero-title">
                    <h1 className="text-3xl my-8">LongevityRx <br/>
                   Admin Portal</h1>
                   <h2 className="text-3xl my-8">Welcome, USER NAME</h2>
                </div>
                <div className="hero-description">
                   <span>Take advantage of features like medication history, controlled substance management, automatic interaction checks, ePAs, comprehensive reporting, and more! Gain direct entry to your state's Prescription Drug Monitoring Program (PDMP/PMP) for added convenience and oversight. Empowering Stability: Navigate Your Long-Term Journey with Ease</span> 
                   <br/>
                   <div className="searchbar">
                   <SearchBar />
                   </div>
                </div>
            </div>
            {/* right side */}
            <div className="hero-right">
                <div className="image-container">
                    <img src="./ds2.jpg" alt=""/>
                </div>
            </div>
        </div>
   </section>
  )
}

export default Hero
