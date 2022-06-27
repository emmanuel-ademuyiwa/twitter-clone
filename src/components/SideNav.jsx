import React from 'react'
import { BsTwitter } from 'react-icons/bs'
import { AiOutlineHome, AiFillHome } from 'react-icons/ai'
import { MdOutlineMessage, MdMessage } from 'react-icons/md'
import { IoMdNotificationsOutline, IoMdNotifications } from 'react-icons/io'
import { BiHash, BiBookmark } from 'react-icons/bi'
import { RiFileList2Line, RiHome2Line } from 'react-icons/ri'
import { CgProfile } from 'react-icons/cg'
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi'
import { FaCreativeCommonsSamplingPlus } from 'react-icons/fa'
import { TbSmartHome } from 'react-icons/tb'
import Button from './Button'
import Card from './Card'


const SideNav = () => {
  return (
    <div className='sideNav'>
        <div className="logo">
            <BsTwitter className='logoIcon' />
        </div>
        <div className="navList">
            <div className='navListItem'>
                <div className="cover active">
                    <AiFillHome className='navListIcon' />
                    <h4>Home</h4>
                </div>
            </div>
            <div className='navListItem'>
                <div className="cover">
                    <BiHash className='navListIcon'  />
                    <h4>Explore</h4>
                </div>
            </div>
            <div className='navListItem'>
                <div className="cover">
                    <IoMdNotificationsOutline className="navListIcon" />
                    <h4>Notifications</h4>
                </div>
            </div>
            <div className='navListItem'>
                <div className="cover">
                    <MdOutlineMessage className="navListIcon" />
                    <h4>Messages</h4>
                </div>
            </div>
            <div className='navListItem'>
                <div className="cover bookmark">
                    <BiBookmark className="navListIcon"  />
                    <h4>Bookmarks</h4>
                </div>
            </div>
            <div className='navListItem'>
                <div className="cover list">
                    <RiFileList2Line className="navListIcon"  />
                    <h4>Lists</h4>
                </div>
            </div>
            <div className='navListItem'>
                <div className="cover">
                    <CgProfile className="navListIcon"  />
                    <h4>Profile</h4>
                </div>
            </div>
            <div className='navListItem'>
                <div className="cover">
                    <HiOutlineDotsCircleHorizontal className="navListIcon"  />
                    <h4>More</h4>
                </div>
            </div>
            <div className="bigScreen">
                <Button text="Tweet" />
            </div>
            
            <Card />
        </div>
    </div>
  )
}

export default SideNav;