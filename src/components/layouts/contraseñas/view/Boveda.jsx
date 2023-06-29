import React from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { database } from '../../../../config/database'
import HeaderBs from '../../../helpers/HeaderBs'

const Boveda = () => {
  const [boveda, setBoveda] = useState([])

  const mostrar = async () => {
    const coleccion = collection(database, 'boveda')
    const data = await getDocs(coleccion)
    setBoveda(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }

  useEffect(() => {
    mostrar()
  }, [])

  return (
    <>
      <HeaderBs />
      <div className='container'>
        <div className='row'>
          {boveda.map((data) => (
            <div className='col-md-4 my-3' key={data.id}>
              <div className='card h-100'>
                <img className='card-img-top' src={data.urlImg} />
                <div className='card-body text-center'>
                  <h5 className='card-title'>{data.nombre}</h5>
                  <p className='card-text'>{data.usuario}</p>
                  <p className='card-text'>{data.password}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Boveda