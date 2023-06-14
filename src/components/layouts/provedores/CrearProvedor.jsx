import React from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { database, subirImagen } from '../../../config/database.jsx'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
            onChange={(e) => setNit(e.target.value)}
            placeholder={'Nit: '}
            type='text'
          />
          <input
            onChange={(e) => setNombre(e.target.value)}
            placeholder={'Nombre Empresa: '}
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
          <input
            onChange={(e) => setImgGerente(e.target.files[0])}
            type='file'
          />
          <input onChange={(e) => setImgLogo(e.target.files[0])} type='file' />
          <input
            onClick={agregarProvedor}
            type='button'
            value='Agregar Provedor'
          />
        </form>
      </main>
    </>
  )
}

export default CrearProvedor
