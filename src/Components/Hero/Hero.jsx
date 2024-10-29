import React from 'react'
import './Hero.css'
import mask from '../../Assets/Imagens/mask.png'
import arrow from '../../Assets/Imagens/arrow.png'
import vector1 from '../../Assets/Imagens/Vector1.png'
import vector2 from '../../Assets/Imagens/Vector2.png'
import vector3 from '../../Assets/Imagens/Vector3.png'
import vector4 from '../../Assets/Imagens/Vector4.png'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-p">
            <img src={vector4} alt="" className='vector-img3' />
            <h1><span>Dive</span> Into The Depths of <span>Virtual Reality</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore 
                nisl tincidunt eget. Lectus mauris eros in vitae .</p>
                <div className="hero-btn">
                    <button>BUILD YOUR WORLD</button>
                    <img src={arrow} alt=""/>
                    
                </div>
        </div>
        <div className="hero-img">
            <div className="mask-container">
                <img src={mask} alt=""  className='hero-image'  />
                <img src={vector2} alt="" className='vector-img' />
                <img src={vector3} alt="" className='vector-img1' />
                <img src={vector1} alt="" className='vector-img2' />
            </div>
            
        </div>
        
    </div>
  )
}

export default Hero;