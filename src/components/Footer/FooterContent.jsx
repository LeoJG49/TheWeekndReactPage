import './FooterContent.css'
import React from 'react'


export default function FooterContent() {
  return (
    <div className='footer-container'>
      <div className="footer-main-content">
        <div className="footer-section">
          <h5 className="footer-info">ABOUT</h5>
          <nav className='footer-nav'>
            <a href="#" className='hover-underline'><span>Home</span></a>
            <a href="https://portfolioleodev2.netlify.app/" target='_blank' rel='noopener noreferrer' className='hover-underline'><span>Portfolio</span></a>
            <a href="mailto:leoneljovel49@gmail.com" target='_blank' rel='noopener noreferrer' className='hover-underline'><span>Contact Me</span></a>
            <a href="mailto:leoneljovel49@gmail.com" target='_blank' rel='noopener noreferrer' className='hover-underline'><span>Email</span></a>
          </nav>
        </div>
        <div className="footer-section">
          <h5 className="footer-info">SOCIAL MEDIA</h5>
          <nav className='footer-nav'>
            <a href="https://www.linkedin.com/in/leonel-jovel-942900272/" target='_blank' rel='noopener noreferrer' className='hover-underline'><span>Linkedin</span></a>
            <a href="https://github.com/LeoJG49" target='_blank' rel='noopener noreferrer' className='hover-underline'><span>Github</span></a>
            <a href="https://www.instagram.com/leonel_jg49/" target='_blank' rel='noopener noreferrer' className='hover-underline'><span>Instagram</span></a>
            <a href="https://x.com/Leo04070259" target='_blank' rel='noopener noreferrer' className='hover-underline'><span>X</span></a>
          </nav>
        </div>
      </div>
      <div className="footer-title">
        <h2>THE WEEKND FAN PAGE</h2>
      </div>
    </div>
  )
}
