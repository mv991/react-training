import React from 'react'
import { useContext } from 'react' 
import { AppContext } from '../context/AppContext'
const Profile = () => {
    const phone = useContext(AppContext)
  return (
    <div>
      <h2>Profile</h2>
        <h2>phone: {phone}</h2>
    </div>
  )
}

export default Profile
