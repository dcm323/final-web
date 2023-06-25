import React from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { database, subirImagen } from '../../../config/database.jsx'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../helpers/Header.jsx'

const CrearProvedor = () => {
  const [nombre, setNombre] = useState('')
  const [direccion, setDireccion] = useState('')
  const [ciudad, setCiudad] = useState('')
  const [nit, setNit] = useState('')
  const [nombreGerente, setNombreGerente] = useState('')
  const [telefono, setTelefono] = useState('')
  const [imgGerente, setImgGerente] = useState(null)
  const [imgLogo, setImgLogo] = useState(null)
  // UseNavigate = retorno a otro path al realizar una accion
  const returnListado = useNavigate()

  const agregarProvedor = async () => {
    const urlImgG = await subirImagen(imgGerente)
    const urlImgL = await subirImagen(imgLogo)
    console.log(urlImgG)
    console.log(urlImgL)

    const provedorCollection = collection(database, 'provedores')
    const provedor = {
      nombre,
      direccion,
      ciudad,
      nit,
      nombreGerente,
      telefono,
      urlImgG,
      urlImgL,
    }
    await addDoc(provedorCollection, provedor)
    returnListado('/listarProvedor')
  }
  return (
    <>
      <Header />
      <form>
        <div className='form-group form-control-sm'>
          <input
            className='form-control'
            onChange={(e) => setCiudad(e.target.value)}
            placeholder={'Ciudad: '}
            type='text'
          />
        </div>
        <div className='form-group form-control-sm'>
          <input
            className='form-control'
            onChange={(e) => setDireccion(e.target.value)}
            placeholder={'Direccion: '}
            type='text'
          />
        </div>
        <div className='form-group form-control-sm'>
          <input
            className='form-control'
            onChange={(e) => setNit(e.target.value)}
            placeholder={'Nit: '}
            type='text'
          />
        </div>
        <div className='form-group form-control-sm'>
          <input
            className='form-control'
            onChange={(e) => setNombre(e.target.value)}
            placeholder={'Nombre Empresa: '}
            type='text'
          />
        </div>
        <div className='form-group form-control-sm'>
          <input
            className='form-control'
            onChange={(e) => setNombreGerente(e.target.value)}
            placeholder={'Nombre Gerente: '}
            type='text'
          />
        </div>
        <div className='form-group form-control-sm'>
          <input
            className='form-control'
            onChange={(e) => setTelefono(e.target.value)}
            placeholder={'Telefono: '}
            type='text'
          />
        </div>
        <div className='form-group form-control-sm'>
          <input
            className='form-control-file'
            onChange={(e) => setImgGerente(e.target.files[0])}
            type='file'
          />
        </div>
        <div className='form-group form-control-sm'>
          <input
            className='form-control-file'
            onChange={(e) => setImgLogo(e.target.files[0])}
            type='file'
          />
        </div>
        <div className='form-group form-control-sm'>
          <input
            className='btn btn-primary'
            onClick={agregarProvedor}
            type='button'
            value='Agregar Provedor'
          />
        </div>
      </form>
    </>
  )
}

export default CrearProvedor
