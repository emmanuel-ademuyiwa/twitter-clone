import React from 'react'
import MobileNav from '../components/MobileNav'
import LeftBar from './LeftBar'
import RightBar from './RightBar'

const Layout = ({ children }) => {
  return (
    <>
      <LeftBar />
        {children}
      <RightBar />
      <MobileNav />
    </>
  )
}

export default Layout