import React from 'react'
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { database } from '../../../config/database'
import { Link } from 'react-router-dom'
import Header from '../../helpers/Header'

const ListarEmpleado = () => {
  const [clientes, setClientes] = useState([])

  const mostrarEmpleados = async () => {
    const clientesCollection = collection(database, 'empleados')
    const data = await getDocs(clientesCollection)
    setClientes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }

  const eliminarEmpleado = async (id) => {
    const servicioEliminado = doc(database, 'empleados', id)
    await deleteDoc(servicioEliminado)
    mostrarEmpleados()
  }

  useEffect(() => {
    mostrarEmpleados()
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
                  <p className='card-text'>{data.cargo}</p>
                  <p className='card-text'>{data.salario}</p>
                  <p className='card-text'>{data.direccioResidencia}</p>
                  <p className='card-text'>{data.numeroCuentaBancaria}</p>

                  <button
                    className='btn btn-danger w-50 my-2'
                    onClick={() => {
                      eliminarEmpleado(data.id)
                    }}
                  >
                    Eliminar
                  </button>
                  <button className='btn btn-primary w-50'>
                    <Link to={'/editarEmpleado/' + data.id}>Edit</Link>
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

export default ListarEmpleado
