import React from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { database, subirImagen } from '../../../config/database.jsx'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../helpers/Header.jsx'

const CrearWeb = () => {
  const [nombre, setNombre] = useState('')
  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('')
  const [imagenUrl, setImagenUrl] = useState('')
  
  // UseNavigate = retorno a otro path al realizar una accion
  const returnListado = useNavigate()

  const agregarWeb = async () => {
    const urlImg = await subirImagen(imagenUrl)
    
    
    

    const bovedaCollection = collection(database, 'boveda')
    const boveda = {
      nombre,
      usuario,
      password,
      urlImg,
    }
    await addDoc(bovedaCollection, boveda)
    returnListado('/listarBoveda')
  }
  return (
    <>
      <Header />
      <form>
        <div className='form-group form-control-sm'>
          <input
            className='form-control'
            onChange={(e) => setNombre(e.target.value)}
            placeholder={'Nombre: '}
            type='text'
          />
        </div>
        <div className='form-group form-control-sm'>
          <input
            className='form-control'
            onChange={(e) => setUsuario(e.target.value)}
            placeholder={'Usuario: '}
            type='text'
          />
        </div>
        <div className='form-group form-control-sm'>
          <input
            className='form-control'
            onChange={(e) => setPassword(e.target.value)}
            placeholder={'Contraseña: '}
            type='text'
          />
        </div>
        <div className='form-group form-control-sm'>
          <input
            className='form-control-file'
            onChange={(e) => setImagenUrl(e.target.files[0])}
            type='file'
          />
        </div>
        
        <div className='form-group form-control-sm'>
          <input
            className='btn btn-primary'
            onClick={agregarWeb}
            type='button'
            value='Agregar Web'
          />
        </div>
      </form>
    </>
  )
}

export default CrearWeb
