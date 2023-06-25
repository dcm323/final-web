import React from 'react'
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { database } from '../../../../config/database'
import HeaderBs from '../../../helpers/HeaderBs'

const Provedores = () => {
  const [provedores, setProvedores] = useState([])

  const mostrarProvedor = async () => {
    const provedoresCollection = collection(database, 'provedores')
    const data = await getDocs(provedoresCollection)
    setProvedores(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }

  useEffect(() => {
    mostrarProvedor()
  }, [])

  return (
    <>
      <HeaderBs />
      <div className='container'>
        <div className='row'>
          {provedores.map((data) => (
            <div className='col-md-4 my-3' key={data.id}>
              <div className='card h-100'>
                <img className='card-img-top' src={data.urlImgG} />
                <img className='card-img-top' src={data.urlImgL} />
                <div className='card-body'>
                  <h5 className='card-title'>{data.nombre}</h5>
                  <p className='card-text'>{data.direccion}</p>
                  <p className='card-text'>{data.ciudad}</p>
                  <p className='card-text'>{data.nit}</p>
                  <p className='card-text'> {data.nombreGerente}</p>
                  <p className='card-text'> {data.telefono}</p>
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

export default Provedores
