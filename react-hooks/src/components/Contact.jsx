import React from 'react'
import { useContext } from 'react' 
import { AppContext } from '../context/AppContext'

const Contact = () => {
    const phone = useContext(AppContext)
  return (
    <div>
      <h2>Contact</h2>
      <h2>Phone:{phone}</h2>
    </div>
  )
}

export default Contact
