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
    console.log(urlImg)

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
      <main>
        <form>
          <input
            onChange={(e) => setBarrio(e.target.value)}
            placeholder={'Barrio: '}
            type='text'
          />
          <input
            onChange={(e) => setCiudad(e.target.value)}
            placeholder={'Ciudad: '}
            type='text'
          />
          <input
            onChange={(e) => setCorreo(e.target.value)}
            placeholder={'Correo: '}
            type='text'
          />
          <input
            onChange={(e) => setDireccion(e.target.value)}
            placeholder={'Direccion: '}
            type='text'
          />
          <input
            onChange={(e) => setDocumento(e.target.value)}
            placeholder={'Documento: '}
            type='text'
          />
          <input
            onChange={(e) => setNombre(e.target.value)}
            placeholder={'Nombre: '}
            type='text'
          />
          <input
            onChange={(e) => setTelefono(e.target.value)}
            placeholder={'Telefono: '}
            type='text'
          />
          <input onChange={(e) => setImg(e.target.files[0])} type='file' />
          <input
            onClick={agregarCliente}
            type='button'
            value='Agregar Cliente'
          />
        </form>
      </main>
    </>
  )
}

export default CrearCliente
