import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { database } from '../../../../config/database'
import HeaderBs from '../../../helpers/HeaderBs'

const Clientes = () => {
  const [clientes, setClientes] = useState([])

  const mostrarClientes = async () => {
    const clientesCollection = collection(database, 'clientes')
    const data = await getDocs(clientesCollection)
    setClientes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }

  useEffect(() => {
    mostrarClientes()
  }, [])

  return (
    <>
      <HeaderBs />
      <div className='container '>
        <div className='row'>
          {clientes.map((data) => (
            <div className='col-md-4 my-3 ' key={data.id}>
              <div className='card h-100'>
                <img className='card-img-top' src={data.urlImg} />
                <div className='card-body text-center'>
                  <h5 className='card-title'>{data.nombre}</h5>
                  <p className='card-text'>{data.documento}</p>
                  <p className='card-text'>{data.correo}</p>
                  <p className='card-text'>{data.telefono}</p>
                  <p className='card-text'> {data.direccion}</p>
                  <p className='card-text'> {data.barrio}</p>
                  <p className='card-text'> {data.ciudad}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Clientes
