import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { database } from '../../../config/database'
import { collection, doc, getDoc, updateDoc } from 'firebase/firestore'
import { useEffect } from 'react'
import Header from '../../helpers/Header'

const EditarProvedor = () => {
  const [nombre, setNombre] = useState('')
  const [direccion, setDireccion] = useState('')
  const [ciudad, setCiudad] = useState('')
  const [nit, setNit] = useState('')
  const [nombreGerente, setNombreGerente] = useState('')
  const [telefono, setTelefono] = useState('')
  const returnListado = useNavigate()
  const { id } = useParams()

  const editarProvedor = async () => {
    const provedorCollection = doc(database, 'provedores', id)
    const provedor = {
      nombre,
      direccion,
      ciudad,
      nit,
      nombreGerente,
      telefono,
    }
    await updateDoc(provedorCollection, provedor)
    returnListado('/listarProvedor')
  }

  const provedorActualizado = async (id) => {
    const provedorEdit = await getDoc(doc(database, 'provedores', id))
    setNombre(provedorEdit.data().nombre)
    setDireccion(provedorEdit.data().direccion)
    setCiudad(provedorEdit.data().ciudad)
    setNit(provedorEdit.data().nit)
    setNombreGerente(provedorEdit.data().nombreGerente)
    setTelefono(provedorEdit.data().telefono)
  }

  useEffect(() => {
    provedorActualizado(id)
  }, [])

  return (
    <>
      <Header />
      <main>
        <section>
          <form>
            <input
              onChange={(e) => setCiudad(e.target.value)}
              placeholder={ciudad}
              type='text'
            />

            <input
              onChange={(e) => setDireccion(e.target.value)}
              placeholder={direccion}
              type='text'
            />

            <input
              onChange={(e) => setNit(e.target.value)}
              placeholder={nit}
              type='text'
            />
            <input
              onChange={(e) => setNombre(e.target.value)}
              placeholder={nombre}
              type='text'
            />
            <input
              onChange={(e) => setNombreGerente(e.target.value)}
              placeholder={nombreGerente}
              type='text'
            />
            <input
              onChange={(e) => setTelefono(e.target.value)}
              placeholder={telefono}
              type='text'
            />

            <input onClick={editarProvedor} type='button' value={'Editar'} />
          </form>
        </section>
      </main>
    </>
  )
}

export default EditarProvedor
