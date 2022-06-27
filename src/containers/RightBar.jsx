import React from 'react'
import Happening from '../components/Happening'
import Search from '../components/Search'

const RightBar = () => {
  return (
    <div className='rightNav'>
      <Search />
      <Happening />
    </div>
  )
}

export default RightBar