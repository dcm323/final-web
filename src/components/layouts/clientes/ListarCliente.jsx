import React from 'react'
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { database } from '../../../config/database'
import { Link } from 'react-router-dom'
import Header from '../../helpers/Header'

const ListarCliente = () => {
  const [clientes, setClientes] = useState([])

  const mostrarClientes = async () => {
    const clientesCollection = collection(database, 'clientes')
    const data = await getDocs(clientesCollection)
    setClientes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }

  const eliminarCliente = async (id) => {
    const servicioEliminado = doc(database, 'clientes', id)
    await deleteDoc(servicioEliminado)
    mostrarClientes()
  }

  useEffect(() => {
    mostrarClientes()
  }, [])

  return (
    <>
      <Header />
      <div className='container'>
        <div className='row'>
          {clientes.map((data) => (
            <div className='col-md-4' key={data.id}>
              <div className='card mb-4 my-3'>
                <img className='card-img-top' src={data.urlImg} />
                <div className='card-body text-center'>
                  <h5 className='card-title'>{data.nombre}</h5>
                  <p className='card-text'>{data.documento}</p>
                  <p className='card-text'>{data.correo}</p>
                  <p className='card-text'>{data.telefono}</p>
                  <p className='card-text'>{data.direccion}</p>
                  <p className='card-text'>{data.barrio}</p>
                  <p className='card-text'>{data.ciudad}</p>
                  <button
                    className='btn btn-danger w-50 my-2'
                    onClick={() => {
                      eliminarCliente(data.id)
                    }}
                  >
                    Eliminar
                  </button>
                  <button className='btn btn-primary w-50'>
                    <Link to={'/editarCliente/' + data.id}>Edit</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ListarCliente
