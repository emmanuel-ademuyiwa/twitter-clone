import React from 'react'
import { BsDot } from 'react-icons/bs';
import profile from '../img/myface.jpeg'


const HappeningCard = () => {
  return (
    <div className='happeningCard'>
        <div className="text">
            <h4>Wrestling <BsDot /> Live</h4>
            <h3>WWE Monday Night RAW</h3>
            <h4>Trending with #WWERaw</h4>
        </div>
        <div className="img">
            <img src={profile} alt="" />
        </div>
    </div>
  )
}

export default HappeningCard