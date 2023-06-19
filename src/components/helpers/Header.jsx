import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <nav>
        <Link to={'/'} className='nav-a'>
          Home
        </Link>
        <Link to={'/admin'} className='nav-a'>
          Admin
        </Link>
        <Link to={'/commerce'} className='nav-a'>
          Commerce
        </Link>
      </nav>
    </>
  )
}

export default Header
