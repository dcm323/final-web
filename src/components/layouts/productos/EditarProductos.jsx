import { doc, getDoc, updateDoc } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { database } from '../../../config/database'
import Header from '../../helpers/Header'

const EditarProductos = () => {
  const [cantidad, setCantidad] = useState('')
  const [categoria, setCategoria] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [nombre, setNombre] = useState('')
  const [valor, setValor] = useState('')

  const returnListado = useNavigate()
  const { id } = useParams()

  const editar = async () => {
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
      <main>
        <section className='form-container'>
          <form className='form'>
            <input
              onChange={(e) => setNombre(e.target.value)}
              placeholder={nombre}
              type='text'
            />
            <input
              onChange={(e) => setDescripcion(e.target.value)}
              placeholder={descripcion}
              type='text'
            />
            <input
              onChange={(e) => setCategoria(e.target.value)}
              placeholder={categoria}
              type='text'
            />
            <input
              onChange={(e) => setCantidad(e.target.value)}
              placeholder={cantidad}
              type='text'
            />
            <input
              onChange={(e) => setValor(e.target.value)}
              placeholder={valor}
              type='text'
            />

            <input onClick={editar} type='button' value={'Editar'} />
          </form>
        </section>
      </main>
    </>
  )
}

export default EditarProductos
