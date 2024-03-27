import React from 'react'
import Post from './post'

function PostFeed() {
  return (
    <div className='flex flex-col w-full  items-center gap-2'>
        <Post image='https://wallpapers.com/images/featured/nezuko-3tg32q5lcq0aaljj.webp'/>
        <Post/>
        <Post/>
        <Post/>

    </div>
  )
}

export default PostFeed
