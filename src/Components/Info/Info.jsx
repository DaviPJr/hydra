import React from 'react'
import './Info.css'
import arrow1 from '../../Assets/Imagens/arrow1.png'

export const Info = () => {
  return (
    <div className='information'>
        <div className="intro">
          <h1>INTRODUCTION</h1>
          <div className="information-p">
            <h2>TO HYDRA VR</h2>
            <img src={arrow1} alt="" />
          </div>
        </div>
        <div className="information-text">
          <p>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
              nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
              quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
              lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
        </div>
    </div>
  )
}

export default Info;
