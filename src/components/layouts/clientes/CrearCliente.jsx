import React from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { database, subirImagen } from '../../../config/database.jsx'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../helpers/Header.jsx'

const CrearCliente = () => {
  const [barrio, setBarrio] = useState('')
  const [ciudad, setCiudad] = useState('')
  const [correo, setCorreo] = useState('')
  const [direccion, setDireccion] = useState('')
  const [documento, setDocumento] = useState('')
  const [nombre, setNombre] = useState('')
  const [telefono, setTelefono] = useState('')
  const [img, setImg] = useState(null)
  // UseNavigate = retorno a otro path al realizar una accion
  const returnListado = useNavigate()

  const agregarCliente = async () => {
    const urlImg = await subirImagen(img)
    const clienteCollection = collection(database, 'clientes')
    const cliente = {
      barrio,
      ciudad,
      correo,
      direccion,
      documento,
      nombre,
      telefono,
      urlImg,
    }
    await addDoc(clienteCollection, cliente)
    returnListado('/listarCliente')
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
            onChange={(e) => setTelefono(e.target.value)}
            value={telefono}
            placeholder='Telefono:'
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
            className='form-control '
            onChange={(e) => setBarrio(e.target.value)}
            value={barrio}
            placeholder='Barrio:'
            type='text'
          />
        </div>
        <div className='form-group form-control-sm'>
          <input
            className='form-control '
            onChange={(e) => setCiudad(e.target.value)}
            value={ciudad}
            placeholder='Ciudad:'
            type='text'
          />
        </div>
        <div className='form-group form-control-sm'>
          <input
            className='form-control'
            onChange={(e) => setDireccion(e.target.value)}
            value={direccion}
            placeholder='Direccion:'
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
            onClick={agregarCliente}
            type='button'
            value='Agregar Cliente'
          />
        </div>
      </form>
    </>
  )
}

export default CrearCliente
