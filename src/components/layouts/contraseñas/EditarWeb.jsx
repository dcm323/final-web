import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { database } from '../../../config/database'
import { collection, doc, getDoc, updateDoc } from 'firebase/firestore'
import { useEffect } from 'react'
import Header from '../../helpers/Header'

const EditarWeb = () => {
  const [nombre, setNombre] = useState('')
  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('')
  const [imagenUrl, setImagenUrl] = useState('')
  const returnListado = useNavigate()
  const { id } = useParams()

  const editarWeb = async () => {
    const webCollection = doc(database, 'boveda', id)
    const web = {
      nombre,
      usuario,
      password,
      imagenUrl,
    }
    await updateDoc(webCollection, web)
    returnListado('/listarBoveda')
  }

  const webActualizada = async (id) => {
    const webEdit = await getDoc(doc(database, 'boveda', id))
    setNombre(webEdit.data().nombre)
    setUsuario(webEdit.data().usuario)
    setPassword(webEdit.data().password)
    setImagenUrl(webEdit.data().imagenUrl)
  }

  useEffect(() => {
    webActualizada(id)
  }, [])

  return (
    <>
      <Header />
      <form>
        <div className='form-group form-control-sm'>
          <input
            className='form-control'
            onChange={(e) => setNombre(e.target.value)}
            placeholder={nombre}
            type='text'
          />
        </div>
        <div className='form-group form-control-sm'>
          <input
            className='form-control'
            onChange={(e) => setUsuario(e.target.value)}
            placeholder={usuario}
            type='text'
          />
        </div>
        <div className='form-group form-control-sm'>
          <input
            className='form-control'
            onChange={(e) => setPassword(e.target.value)}
            placeholder={password}
            type='text'
          />
        </div>

        <div className='form-group form-control-sm'>
          <input
            className='btn btn-primary'
            onClick={editarWeb}
            type='button'
            value='Editar'
          />
        </div>
      </form>
    </>
  )
}

export default EditarWeb
