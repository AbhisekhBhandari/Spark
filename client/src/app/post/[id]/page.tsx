'use client'
import React, { useEffect, useState } from 'react'
import Post from '@/components/home/post'
import { POST_MOCK } from '@/_mock/post'
import { useRouter } from 'next/router';

function PostS() {
  const [data, setData] = useState<undefined | any>()
  const router = useRouter();
  const param = router.query;
  console.log('param', param);
  
  useEffect(()=>{
    // const data = POST_MOCK.find((item)=>item.postId ==)
  },[])
  return (
    <div>
      
      <Post data={data}/>
    </div>
  )
}

export default PostS
