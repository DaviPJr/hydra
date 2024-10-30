import React from 'react'
import './Card.css'

export const Card = (props) => {
  return (
    <div className='card'>
        <img src={props.img} alt="" />
        <h2>{props.title}</h2>
        <hr />
        <p>Vitae sapien pellentesque habitant morbi
            nunc. Viverra aliquet  porttitor rhoncus 
            libero justo laoreet sit amet vitae.</p>
        <button>TRY IT NOW</button>
    </div>
  )
}

export default Card;