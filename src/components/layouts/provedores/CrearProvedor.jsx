import React from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { database, subirImagen } from '../../../config/database.jsx'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../helpers/Header.jsx'

const CrearProvedor = () => {
  const [ciudad, setCiudad] = useState('')
  const [direccion, setDireccion] = useState('')
  const [gerente, setGerente] = useState('')
  const [nombre, setNombre] = useState('')
  const [nombreGerente, setNombreGerente] = useState('')
  const [telefono, setTelefono] = useState('')
  const [img, setImg] = useState(null)
  const [imgDos, setImgDos] = useState(null)
  // UseNavigate = retorno a otro path al realizar una accion
  const returnListado = useNavigate()

  const agregarProvedor = async () => {
    const urlImg = await subirImagen(img)
    console.log(urlImg)

    const provedorCollection = collection(database, 'provedores')
    const provedor = {
      ciudad,
      direccion,
      gerente,
      nombre,
      nombreGerente,
      telefono,
      img,
      imgDos
    }
    await addDoc(provedorCollection, provedor)
    returnListado('/listarProvedor')
  }
  return (
    <>
      <Header />
      <main>
        <form>
         
          <input
            onChange={(e) => setCiudad(e.target.value)}
            placeholder={'Ciudad: '}
            type='text'
          />
          
          <input
            onChange={(e) => setDireccion(e.target.value)}
            placeholder={'Direccion: '}
            type='text'
          />
          <input
            onChange={(e) => setGerente(e.target.value)}
            placeholder={'Gerente: '}
            type='text'
          />
          <input
            onChange={(e) => setNombre(e.target.value)}
            placeholder={'Nombre: '}
            type='text'
          />
          <input
            onChange={(e) => setNombreGerente(e.target.value)}
            placeholder={'Nombre Gerente: '}
            type='text'
          />
          <input
            onChange={(e) => setTelefono(e.target.value)}
            placeholder={'Telefono: '}
            type='text'
          />
          <input onChange={(e) => setImg(e.target.files[0])} type='file' />
          <input onChange={(e) => setImgDos(e.target.files[0])} type='file' />
          <input
          
            onClick={agregarCliente}
            type='button'
            value='Agregar Provedor'
          />
        </form>
      </main>
    </>
  )
}

export default CrearProvedor