import React from 'react'
import './BannerTech.css'
import chevron from '../../Assets/Imagens/chevron.png'
import vector9 from '../../Assets/Imagens/vector9.png'

export const BannerTech = () => {
  return (
    <div className="parent-container">
        <div className="vector-div">
            <img src={vector9} alt="" className='vector9'/>
        </div>
            <div className='banner-tech'>
                <h1>TECHNOLOGIES & HARDWARE</h1>
                <h2>USED BY HYDRA VR.</h2>

                <div className="button-chevron">
                    <img src={chevron} alt="" />
                </div>
            </div>
    </div>
  )
}

export default BannerTech;