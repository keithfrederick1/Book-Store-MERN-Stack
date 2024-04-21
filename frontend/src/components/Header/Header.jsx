import React from 'react'
import './Header.css';
const Header = () => {
  return (
    <section className="header-wrapper">
        <div className="flexStart paddings header-container">
            <img src="./longevity-logo.png" alt="logo" width={100}/>
            <div className="innerWidth flexEnd header-menu">
                <a href="">Patient Search</a>
                <br/>
                <a href="">Prescriptions</a>
                <br/>
                <a href="">Account</a>
                <br/>
                <a href="">Lisence Overview</a>
            </div>
        </div>
    </section>
  )
}

export default Header
