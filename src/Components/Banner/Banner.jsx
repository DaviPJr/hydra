import React from 'react'
import './Banner.css'
import location from '../../Assets/Imagens/location.png'
import phone from '../../Assets/Imagens/phone.png'
import mail from '../../Assets/Imagens/mail.png'

export const Banner = () => {
  return (
    <div className='banner'>
        <div className="info">
            <img src={location} alt="" className='location-img'/>
            <div className="info-p">
                <h2>Pay Us a Visit</h2>
                <p>Union St, Seattle, WA 98101, United States</p>
            </div>
            
        </div>
       <hr />
        <div className="info">
            <img src={phone} alt="" />
            <div className="info-p">
                <h2>Give Us a Call</h2>
                <p>(110) 1111-1010</p>
            </div>
           
        </div>
        <hr />
        <div className="info">
            <img src={mail} alt="" />
            <div className="info-p">
                <h2>Send Us a Message</h2>
                <p>Contact@HydraVTech.com</p>
            </div>
            
        </div>
    </div>
  )
}

export default Banner;