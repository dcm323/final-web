import React from 'react'
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { database } from '../../../config/database'
import { Link } from 'react-router-dom'
import Header from '../../helpers/Header'

const ListarProductos = () => {
  const [productos, setProductos] = useState([])

  const mostrar = async () => {
    const coleccion = collection(database, 'productos')
    const data = await getDocs(coleccion)
    setProductos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }

  const eliminar = async (id) => {
    const productoEliminado = doc(database, 'productos', id)
    await deleteDoc(productoEliminado)
    mostrar()
  }

  useEffect(() => {
    mostrar()
  }, [])

  return (
    <>
      <Header />

      <div className='container'>
        <div className='row'>
          {productos.map((data) => (
            <div className='col-md-4' key={data.id}>
              <div className='card mb-4 my-3'>
                <img className='card-img-top' src={data.urlImg} />
                <div className='card-body text-center'>
                  <h5 className='card-title'>{data.nombre}</h5>
                  <p className='card-text'>{data.descripcion}</p>
                  <p className='card-text'>{data.categoria}</p>
                  <p className='card-text'>{data.cantidad}</p>
                  <p className='card-text'>{data.valor}</p>

                  <button
                    className='btn btn-danger w-50 my-2'
                    onClick={() => {
                      eliminar(data.id)
                    }}
                  >
                    Eliminar
                  </button>
                  <button className='btn btn-primary w-50'>
                    <Link to={'/editarProducto/' + data.id}>Edit</Link>
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

export default ListarProductos
