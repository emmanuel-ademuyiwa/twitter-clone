import React from 'react'
import HappeningCard from './HappeningCard'

const Happening = () => {
  return (
    <div className='listScroll'>
        <div className='happening'>
            <div className="title">
                <h3>What's happening</h3>
            </div>
            <div className="happeningList">
                <HappeningCard />
                <HappeningCard />
                <HappeningCard />
                <HappeningCard />
                <HappeningCard />
                <div className="showMore">
                    <h4>Show more</h4>
                </div>
            </div>

        </div>

        <div className='happening'>
            <div className="title">
                <h3>Who to follow</h3>
            </div>
            <div className="happeningList">
                <HappeningCard />
                <HappeningCard />
                <div className="showMore">
                    <h4>Show more</h4>
                </div>
            </div>

        </div> 
        <br /><br /> <br /><br /><br />
    </div>
  )
}

export default Happening