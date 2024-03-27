import React from 'react'
import ProfileDetails from './profile-details'

function ProfileSection() {
  return (
    <div className=' hidden  xl:flex w-[450px]  border -end sticky top-0 bottom-0 h-screen rounded-xl  border-gray-300'>
        <ProfileDetails/>
    </div>
  )
}

export default ProfileSection
