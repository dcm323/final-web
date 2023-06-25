import React from 'react'
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { database } from '../../../config/database'
import { Link } from 'react-router-dom'
import Header from '../../helpers/Header'

const ListarProvedor = () => {
  const [provedores, setProvedores] = useState([])

  const mostrarProvedor = async () => {
    const provedoresCollection = collection(database, 'provedores')
    const data = await getDocs(provedoresCollection)
    setProvedores(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }
  const eliminarProvedor = async (id) => {
    const servicioEliminado = doc(database, 'provedores', id)
    await deleteDoc(servicioEliminado)
    mostrarProvedor()
  }
  useEffect(() => {
    mostrarProvedor()
  }, [])

  return (
    <>
      <Header />
      <div className='container'>
        <div className='row'>
          {provedores.map((data) => (
            <div className='col-md-4' key={data.id}>
              <div className='card mb-4 my-3'>
                <img className='card-img-top' src={data.urlImgG} />
                <img className='card-img-top' src={data.urlImgL} />
                <div className='card-body text-center'>
                  <h5 className='card-title'>{data.nombre}</h5>
                  <p className='card-text'>{data.nombreGerente}</p>
                  <p className='card-text'>{data.nit}</p>
                  <p className='card-text'>{data.ciudad}</p>
                  <p className='card-text'>{data.direccion}</p>
                  <p className='card-text'>{data.telefono}</p>
                  <button
                    className='btn btn-danger w-50 my-2'
                    onClick={() => {
                      eliminarProvedor(data.id)
                    }}
                  >
                    Eliminar
                  </button>
                  <button className='btn btn-primary w-50'>
                    <Link to={'/editarProvedor/' + data.id}>Edit</Link>
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

export default ListarProvedor
