import React, { useState } from 'react'
import Header from '../components/Header'

const MiddleBar = ({ children }) => {

  const [state, setState] = useState(false)

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    if(e.currentTarget.scrollTop === 0) {
       setState(false)
    } else {
      setState(true)
    }
  } 

  return (
    <div className='middle'>
      <Header handleScroll={state} />
      <div className="middleChildren" onScroll={handleScroll}>
        { children }
      </div>
    </div>
  )
}

export default MiddleBar;