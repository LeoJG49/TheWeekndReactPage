import './FooterContent.css'
import React from 'react'


export default function FooterContent() {
  return (
    <div className='footer-container'>
      <div className="footer-main-content">
        <div className="footer-section">
          <h5 className="footer-info">ABOUT</h5>
          <nav className='footer-nav'>
            <a href="#"><span>Home</span></a>
            <a href="#"><span>Projects</span></a>
            <a href="#"><span>Our Mission</span></a>
            <a href="#"><span>Contact Us</span></a>
          </nav>
        </div>
        <div className="footer-section">
          <h5 className="footer-info">EDUCATION</h5>
          <nav className='footer-nav'>
            <a href="#"><span>News</span></a>
            <a href="#"><span>Learn</span></a>
            <a href="#"><span>Certification</span></a>
            <a href="#"><span>Publications</span></a>
          </nav>
        </div>
      </div>
      <div className="footer-title">
        <h2>THE WEEKND FAN PAGE</h2>
      </div>
    </div>
  )
}
