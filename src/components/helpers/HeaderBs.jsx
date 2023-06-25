import React from 'react'

const HeaderBs = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container'>
          <a className='navbar-brand' href='/'>
            Home
          </a>
          <div
            className='collapse navbar-collapse justify-content-end'
            id='navbarNav'
          >
            <ul className='navbar-nav'>
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
                  Proveedores
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/empleados'>
                  Empleados
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/passwords'>
                  Contraseñas
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/movies'>
                  Movie-Api
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
