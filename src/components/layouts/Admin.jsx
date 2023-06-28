import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../helpers/Header'

const Admin = () => {
  return (
    <>
      <Header />
      <section className='admin-container'>
        <div className='card-admin text-center rounded'>
          <h1>Clientes</h1>
          <Link to={'/crearCliente'}>Crear</Link>
          <Link to={'/listarCliente'}>Listar</Link>
        </div>
        <div className='card-admin text-center rounded'>
          <h1>Productos</h1>
          <Link to={'/crearProducto'}>Crear</Link>
          <Link to={'/listarProducto'}>Listar</Link>
        </div>
        <div className='card-admin text-center rounded'>
          <h1>Proveedores</h1>
          <Link to={'/crearProvedor'}>Crear</Link>
          <Link to={'/listarProvedor'}>Listar</Link>
        </div>
        <div className='card-admin text-center rounded'>
          <h1>Empleados</h1>
          <Link to={'/crearEmpleado'}>Crear</Link>
          <Link to={'/listarEmpleado'}>Listar</Link>
        </div>
        <div className='card-admin text-center rounded'>
          <h1>Contraseñas</h1>
          <Link to={'/crearWeb'}>Crear</Link>
          <Link to={'/listarBoveda'}>Listar</Link>
        </div>
      </section>
    </>
  )
}

export default Admin
