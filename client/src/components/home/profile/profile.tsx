import React from 'react'
import ProfileDetails from './profile-details'

function ProfileSection() {
  return (
    <div className='w-1/4 hidden  lg:flex  border-l sticky top-0 bottom-0 h-screen rounded-xl  border-gray-300'>
        <ProfileDetails/>
    </div>
  )
}

export default ProfileSection
