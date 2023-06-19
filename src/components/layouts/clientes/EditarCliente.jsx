import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { database } from '../../../config/database'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { useEffect } from 'react'
import Header from '../../helpers/Header'

const EditarCliente = () => {
  const [barrio, setBarrio] = useState('')
  const [ciudad, setCiudad] = useState('')
  const [correo, setCorreo] = useState('')
  const [direccion, setDireccion] = useState('')
  const [documento, setDocumento] = useState('')
  const [nombre, setNombre] = useState('')
  const [telefono, setTelefono] = useState('')

  const returnListado = useNavigate()
  const { id } = useParams()

  const editarCliente = async () => {
    const clienteCollection = doc(database, 'clientes', id)
    const cliente = {
      barrio,
      ciudad,
      correo,
      direccion,
      documento,
      nombre,
      telefono,
    }
    await updateDoc(clienteCollection, cliente)
    returnListado('/listarCliente')
  }

  const clienteActualizado = async (id) => {
    const clienteEdit = await getDoc(doc(database, 'clientes', id))
    setBarrio(clienteEdit.data().barrio)
    setCiudad(clienteEdit.data().ciudad)
    setCorreo(clienteEdit.data().correo)
    setDireccion(clienteEdit.data().direccion)
    setDocumento(clienteEdit.data().documento)
    setNombre(clienteEdit.data().nombre)
    setTelefono(clienteEdit.data().telefono)
  }

  useEffect(() => {
    clienteActualizado(id)
  }, [])

  return (
    <>
      <Header />
      <main>
        <section className='form-container'>
          <form className='form'>
            <input
              onChange={(e) => setNombre(e.target.value)}
              placeholder={nombre}
              type='text'
            />
            <input
              onChange={(e) => setDocumento(e.target.value)}
              placeholder={documento}
              type='text'
            />
            <input
              onChange={(e) => setCorreo(e.target.value)}
              placeholder={correo}
              type='text'
            />
            <input
              onChange={(e) => setDireccion(e.target.value)}
              placeholder={direccion}
              type='text'
            />
            <input
              onChange={(e) => setCiudad(e.target.value)}
              placeholder={ciudad}
              type='text'
            />
            <input
              onChange={(e) => setBarrio(e.target.value)}
              placeholder={barrio}
              type='text'
            />
            <input
              onChange={(e) => setTelefono(e.target.value)}
              placeholder={telefono}
              type='text'
            />

            <input onClick={editarCliente} type='button' value={'Editar'} />
          </form>
        </section>
      </main>
    </>
  )
}

export default EditarCliente
