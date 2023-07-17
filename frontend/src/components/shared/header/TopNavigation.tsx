import React from 'react'
import { Link } from 'react-router-dom'

function TopNavigation() {
  return (
    <nav>
      <div>
        <img src="" alt="logo" />
      </div>
      <div>
        <Link to='/'>회원가입</Link>
      </div>
    </nav>
  )
}

export default TopNavigation