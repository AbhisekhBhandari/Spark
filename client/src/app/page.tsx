import Post from '@/components/home/post'
import PostFeed from '@/components/home/post-feed'
import ProfileSection from '@/components/home/profile/profile'
import { Card, Container } from '@mui/material'
import React from 'react'

function Home() {
  return (
    <div className='w-full flex'>
      <PostFeed/>
      <ProfileSection/>
    </div>
  )
}

export default Home
