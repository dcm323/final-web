import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <nav>
        <Link to={'/admin'} className='nav-a'>
          Admin
        </Link>
      </nav>
    </>
  )
}

export default Header
