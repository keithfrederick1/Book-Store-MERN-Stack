import React from 'react'
import './Header.css';
const Header = () => {
  return (
    <section className="header-wrapper">
        <div className="flexStart paddings header-container">
            <img src="./longevity-logo.png" alt="logo" width={100}/>


            <div className="innerWidth flexEnd header-menu">
                <a href="">Our Value</a>
                <a href="">Contact</a>
                <a href="">Get Started</a>
                <a href="">Contact</a>
                <button className="button">
                    <a href="">Reach Out</a>
                </button>
                
            </div>
        </div>
    </section>
  )
}

export default Header
