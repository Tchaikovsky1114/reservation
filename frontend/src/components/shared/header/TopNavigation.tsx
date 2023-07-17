import React from 'react'
import { Link } from 'react-router-dom'

function TopNavigation() {
  return (
    <nav className='flex justify-between py-4 px-8 border-b-2 border-b-slate-400 shadow-md shadow-gray-400'>
      <div>
        <img src="" alt="logo" />
      </div>
      <div className='flex gap-2 items-center'>
        <Link to='/auth'>회원가입</Link>
        <Link to='/reservation'>Reservation</Link>
        <Link to='/about'>Branches</Link>
      </div>
    </nav>
  )
}

export default TopNavigation