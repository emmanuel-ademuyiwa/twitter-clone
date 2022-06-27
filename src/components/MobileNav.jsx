import React from 'react'
import { AiOutlineHome, AiFillHome } from 'react-icons/ai'
import { MdOutlineMessage, MdMessage } from 'react-icons/md'
import { IoMdNotificationsOutline, IoMdNotifications } from 'react-icons/io'
import { BiHash, BiBookmark } from 'react-icons/bi'
import { RiFileList2Line, RiHome2Line } from 'react-icons/ri'
import { CgProfile } from 'react-icons/cg'
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi'
import { FaCreativeCommonsSamplingPlus } from 'react-icons/fa'
import { TbSmartHome } from 'react-icons/tb'

const MobileNav = () => {
  return (
    <div className='mobileNav'>
        <div className="navList">
            <div className='navListItem'>
                <div className="cover active">
                    <AiFillHome className='navListIcon' />
                </div>
            </div>
            <div className='navListItem'>
                <div className="cover">
                    <BiHash className='navListIcon'  />
                </div>
            </div>
            <div className='navListItem'>
                <div className="cover">
                    <IoMdNotificationsOutline className="navListIcon" />
                </div>
            </div>
            <div className='navListItem'>
                <div className="cover">
                    <MdOutlineMessage className="navListIcon" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default MobileNav