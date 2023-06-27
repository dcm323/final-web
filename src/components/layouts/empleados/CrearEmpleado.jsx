import React from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { database, subirImagen } from '../../../config/database.jsx'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../helpers/Header.jsx'

const CrearEmpleado = () => {
  const [nombre, setNombre] = useState('')
  const [documento, setDocumento] = useState('')
  const [correo, setCorreo] = useState('')
  const [cargo, setCargo] = useState('')
  const [salario, setSalario] = useState('')
  const [direccioResidencia, setDireccionRecidencia] = useState('')
  const [numeroCuentaBancaria, setCuentaBancaria] = useState('')
  const [img, setImg] = useState('null')

  const returnListado = useNavigate()

  const agregarEmpleado = async () => {
    const urlImg = await subirImagen(img)
    const empleadoCollection = collection(database, 'empleados')
    const empleado = {
      nombre,
      documento,
      correo,
      cargo,
      salario,
      direccioResidencia,
      numeroCuentaBancaria,
      urlImg,
    }
    await addDoc(empleadoCollection, empleado)
    returnListado('/listarEmpleado')
  }
  return (
    <>
      <Header />
      <form>
        <div className='form-group form-control-sm'>
          <input
            className='form-control'
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
            placeholder='Nombre:'
            type='text'
          />
        </div>
        <div className='form-group form-control-sm'>
          <input
            className='form-control'
            onChange={(e) => setDocumento(e.target.value)}
            value={documento}
            placeholder='Documento:'
            type='text'
          />
        </div>
        <div className='form-group form-control-sm'>
          <input
            className='form-control'
            onChange={(e) => setCorreo(e.target.value)}
            value={correo}
            placeholder='Correo:'
            type='text'
          />
        </div>
        <div className='form-group form-control-sm'>
          <input
            className='form-control'
            onChange={(e) => setCargo(e.target.value)}
            value={cargo}
            placeholder='Cargo:'
            type='text'
          />
        </div>
        <div className='form-group form-control-sm'>
          <input
            className='form-control'
            onChange={(e) => setSalario(e.target.value)}
            value={salario}
            placeholder='Salario:'
            type='text'
          />
        </div>
        <div className='form-group form-control-sm'>
          <input
            className='form-control '
            onChange={(e) => setDireccionRecidencia(e.target.value)}
            value={direccioResidencia}
            placeholder='Direccion de residencia:'
            type='text'
          />
        </div>
        <div className='form-group form-control-sm'>
          <input
            className='form-control '
            onChange={(e) => setCuentaBancaria(e.target.value)}
            value={numeroCuentaBancaria}
            placeholder='Cuenta Bancaria:'
            type='text'
          />
        </div>

        <div className='form-group form-control-sm'>
          <input
            className='form-control-file'
            onChange={(e) => setImg(e.target.files[0])}
            type='file'
          />
        </div>
        <div className='form-group form-control-sm'>
          <input
            className='btn btn-primary'
            onClick={agregarEmpleado}
            type='button'
            value='Agregar Empleado'
          />
        </div>
      </form>
    </>
  )
}

export default CrearEmpleado
