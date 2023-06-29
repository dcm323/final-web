import React from 'react'
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { database } from '../../../config/database'
import { Link } from 'react-router-dom'
import Header from '../../helpers/Header'

const ListarWeb = () => {
  const [webs, setWebs] = useState([])

  const mostrarWebs = async () => {
    const websCollection = collection(database, 'boveda')
    const data = await getDocs(websCollection)
    setWebs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }
  const eliminarWeb = async (id) => {
    const servicioEliminado = doc(database, 'boveda', id)
    await deleteDoc(servicioEliminado)
    mostrarWebs()
  }
  useEffect(() => {
    mostrarWebs()
  }, [])

  return (
    <>
      <Header />
      <div className='container'>
        <div className='row'>
          {webs.map((data) => (
            <div className='col-md-4' key={data.id}>
              <div className='card mb-4 my-3'>
                <img className='card-img-top' src={data.urlImg} />
                <div className='card-body text-center'>
                  <h5 className='card-title'>{data.nombre}</h5>
                  <p className='card-text'>{data.usuario}</p>
                  <p className='card-text'>{data.password}</p>
                  <button
                    className='btn btn-danger w-50 my-2'
                    onClick={() => {
                      eliminarWeb(data.id)
                    }}
                  >
                    Eliminar
                  </button>
                  <button className='btn btn-primary w-50'>
                    <Link to={'/editarWeb/'+data.id}>Edit</Link>
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

export default ListarWeb
