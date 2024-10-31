import React from 'react'
import './Footer.css'
import footerFrame from '../../Assets/Imagens/footerframe.png'
import facebook from '../../Assets/Imagens/facebook.png'
import twitter from '../../Assets/Imagens/twitter.png'
import linkedin from '../../Assets/Imagens/linkedin.png'
import youtube from '../../Assets/Imagens/youtube.png'
import instagram from '../../Assets/Imagens/instagram.png'
import pinterest from '../../Assets/Imagens/pinterest.png'
import vector11 from '../../Assets/Imagens/vector11.png'
import vector12 from '../../Assets/Imagens/vector12.png'


export const Footer = () => {
  return (
    <div className="footer-container">
        <div className='footer'>
            <img src={vector11} alt="" className='vector11'/>
            <img src={vector12} alt="" className='vector12'/>
            <div className="footer-logo">
                <img src={footerFrame} alt="" className='footer-logo-img' />
            </div>
            <hr />
            <div className="footer-about">
                <h3>ABOUT</h3>
                <h3>SERVICES</h3>
                <h3>TECHNOLOGIES</h3>
                <h3>HOW TO</h3>
                <h3>JOIN HYDRA</h3>
            </div>
            <hr />
            <div className="footer-faq">
                <h3>F.A.Q</h3>
                <h3>SITEMAP</h3>
                <h3>CONDITIONS</h3>
                <h3>LICENSES</h3>
            </div>
            <hr />
            <div className="footer-socials">
                <h3>SOCIALIZE WITH HYDRA</h3>
                <div className="footer-socials-icons">
                    <img src={facebook} alt="" />
                    <img src={twitter} alt="" />
                    <img src={linkedin} alt="" />
                    <img src={youtube} alt="" />
                    <img src={instagram} alt="" />
                    <img src={pinterest} alt="" />
                </div>
                <button>BUILD YOUR WORLD</button>
            </div>
        </div>
    </div>
    
  )
}

export default Footer;