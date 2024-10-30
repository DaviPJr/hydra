import React from 'react'
import './Circles.css'
import tinyArrow from '../../Assets/Imagens/tinyarrow.png'


export const Circles = (props) => {
  return (
    <div className='circles'>
        
        <div className="circles-number">
            
            <h1>{props.title}</h1>
        </div>
        <div className='circles-p'>
            <img src={tinyArrow} alt="" />
            <div className="circles-p-text">
                <p>{props.firstTitle}</p>
                <p>{props.secondTitle}</p>
            </div>
        </div>
    </div>
  )
}

export default Circles;