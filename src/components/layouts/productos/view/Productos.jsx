import React from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { database } from '../../../../config/database'
import HeaderBs from '../../../helpers/HeaderBs'

const Productos = () => {
  const [productos, setProductos] = useState([])

  const mostrar = async () => {
    const coleccion = collection(database, 'productos')
    const data = await getDocs(coleccion)
    setProductos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }

  useEffect(() => {
    mostrar()
  }, [])

  return (
    <>
      <HeaderBs />
      <div className='container'>
        <div className='row'>
          {productos.map((data) => (
            <div className='col-md-4 my-3' key={data.id}>
              <div className='card h-100'>
                <img className='card-img-top' src={data.urlImg} />
                <div className='card-body'>
                  <h5 className='card-title'>{data.nombre}</h5>
                  <p className='card-text'>{data.descripcion}</p>
                  <p className='card-text'>{data.categoria}</p>
                  <p className='card-text'>{data.cantidad}</p>
                  <p className='card-text'> {data.valor}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Productos
