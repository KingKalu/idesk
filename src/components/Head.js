// import React from 'react'
import './Head.scss'
import isaac from '../assets/isaac.jpg'
import time from '../assets/time.png'

const Head = () => {
  return (
    <div className='head'>
        <img src={isaac}/>
        <div>
            <h4>Isaac Kalu</h4>
            <div className='time'>
                <img src={time} /> 3 min ago
            </div>
        </div>
    </div>
  )
}

export default Head