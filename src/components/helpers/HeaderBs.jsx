import React from 'react'

const HeaderBs = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container'>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <a className='nav-link' href='/clientes'>
                  Clientes
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/productos'>
                  Productos
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/provedores'>
                  Provedores
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/empleados'>
                  Empleados
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/passwords'>
                  Passwords
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default HeaderBs
