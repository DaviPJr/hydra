import React from 'react'
import './Nav.css'
import frame from '../../Assets/Imagens/Frame.png';
import frame2 from '../../Assets/Imagens/Frame2.png';


export const Nav = () => {
  return (
    <div className='nav'>
        <div className="logo">
            <img className='logo' src={frame} alt="" />
            <img className='logo-p' src={frame2} alt="" />
        </div>
        <div className="menu">
            <ul>
                <li>ABOUT</li>
                <li>SERVICES</li>
                <li>TECHNOLOGIES</li>
                <li>HOW TO</li>
            </ul>
        </div>
        <div className="contato">
            <button className='btn1'>CONTACT US</button>
            <button className='btn2'>JOIN HYDRA</button>
        </div>
    </div>
  )
}

export default Nav;