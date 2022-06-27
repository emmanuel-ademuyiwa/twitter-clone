import React from 'react'
import PostContainer from '../components/PostContainer'
import Layout from '../containers/Layout'
import MiddleBar from '../containers/MiddleBar'

const Homepage = () => {
  return (
    <Layout>
        <MiddleBar>
          <PostContainer />
        </MiddleBar>
    </Layout>
  )
}

export default Homepage