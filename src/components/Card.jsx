import React from 'react'
import profile from '../img/myface.jpeg'
import { BsThreeDots } from 'react-icons/bs'

const Card = () => {
  return (
    <div className='card'>
        <div className="imgCont">
            <img src={profile} alt="" />
        </div>
        <div className="nameCont">
            <h5 className='name'>Emmanuel Ademu...</h5>
            <h5>@thenels0n_</h5>
        </div>
       <BsThreeDots className='dots'/>
    </div>
  )
}

export default Card