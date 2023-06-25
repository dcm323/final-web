import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { database } from '../../../config/database'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { useEffect } from 'react'
import Header from '../../helpers/Header'

const EditarProductos = () => {
  const [cantidad, setCantidad] = useState('')
  const [categoria, setCategoria] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [nombre, setNombre] = useState('')
  const [valor, setValor] = useState('')

  const returnListado = useNavigate()
  const { id } = useParams()

  const editarProducto = async () => {
    const coleccion = doc(database, 'productos', id)
    const producto = {
      cantidad,
      categoria,
      descripcion,
      nombre,
      valor,
    }
    await updateDoc(coleccion, producto)
    returnListado('/listarProducto')
  }
  const productoActualizado = async (id) => {
    const productoEdit = await getDoc(doc(database, 'productos', id))
    setCantidad(productoEdit.data().cantidad)
    setCategoria(productoEdit.data().categoria)
    setDescripcion(productoEdit.data().descripcion)
    setNombre(productoEdit.data().nombre)
    setValor(productoEdit.data().valor)
  }
  useEffect(() => {
    productoActualizado(id)
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
            onChange={(e) => setDescripcion(e.target.value)}
            placeholder={descripcion}
            type='text'
          />
        </div>
        <div className='form-group form-control-sm'>
          <input
            className='form-control'
            onChange={(e) => setCategoria(e.target.value)}
            placeholder={categoria}
            type='text'
          />
        </div>
        <div className='form-group form-control-sm'>
          <input
            className='form-control'
            onChange={(e) => setCantidad(e.target.value)}
            placeholder={cantidad}
            type='text'
          />
        </div>
        <div className='form-group form-control-sm'>
          <input
            className='form-control'
            onChange={(e) => setValor(e.target.value)}
            placeholder={valor}
            type='text'
          />
        </div>

        <div className='form-group form-control-sm'>
          <input
            className='btn btn-primary'
            onClick={editarProducto}
            type='button'
            value='Agregar Cliente'
          />
        </div>
      </form>
    </>
  )
}

export default EditarProductos
