import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { database } from '../../../../config/database'
import HeaderBs from '../../../helpers/HeaderBs'

const Empleados = () => {
  const [empleados, setEmpleados] = useState([])

  const mostrarEmpleados = async () => {
    const empleadosCollection = collection(database, 'empleados')
    const data = await getDocs(empleadosCollection)
    setEmpleados(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }

  useEffect(() => {
    mostrarEmpleados()
  }, [])

  return (
    <>
      <HeaderBs />
      <div className='container'>
        <div className='row'>
          {empleados.map((data) => (
            <div className='col-md-4 my-3' key={data.id}>
              <div className='card h-100'>
                <img className='card-img-top' src={data.urlImg} />
                <div className='card-body text-center'>
                  <h5 className='card-title'>{data.nombre}</h5>
                  <p className='card-text'>{data.documento}</p>
                  <p className='card-text'>{data.correo}</p>
                  <p className='card-text'>{data.cargo}</p>
                  <p className='card-text'>{data.salario}</p>
                  <p className='card-text'>{data.direccioResidencia}</p>
                  <p className='card-text'>{data.numeroCuentaBancaria}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Empleados
