import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../helpers/Header'

const Admin = () => {
  return (
    <>
      <Header />
      <section className='admin-container'>
        <div className='admin-item'>
          <h1>Clientes</h1>
          <Link to={'/crearCliente'}>Crear</Link>
          <Link to={'/listarCliente'}>Listar</Link>
        </div>
        <div className='admin-item'>
          <h1>Productos</h1>
          <Link to={'/crearProducto'}>Crear</Link>
          <Link to={'/listarProducto'}>Listar</Link>
        </div>
        <div className='admin-item'>
          <h1>Proveedores</h1>
          <Link to={'/crearProvedor'}>Crear</Link>
          <Link to={'/listarProvedor'}>Listar</Link>
        </div>
        <div className='admin-item'>
          <h1>Empleados</h1>
          <Link to={'/path'}>Crear</Link>
          <Link to={'/path'}>Listar</Link>
        </div>
        <div className='admin-item'>
          <h1>Contraseñas</h1>
          <Link to={'/path'}>Crear</Link>
          <Link to={'/path'}>Listar</Link>
        </div>
      </section>
    </>
  )
}

export default Admin
