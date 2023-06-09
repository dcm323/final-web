import React from 'react'
import { Link } from 'react-router-dom'

const Provedores = () => {
  return <div>
    <Link to={'/listarProvedor'} >Ver provedores</Link>
           <Link to={'/crearProvedor'} >Crear Provedor</Link>
           <Link to={'/'} ></Link>
        </div>
}

export default Provedores