import React from 'react'
import { BsStars } from 'react-icons/bs'
import profile from '../img/myface.jpeg'

const Header = ({ handleScroll }) => {
  return (
    <header>
      <div className={ handleScroll ?  "boxShadow headerContainer" : 'headerContainer'}>
        <div className="header">
          <div className="imgContainer">
            <img src={profile} alt="" />
          </div>
          <h4>Home</h4>
        </div>
          <BsStars className='headerIcon' />
      </div>
    </header>
  )
}

export default Header