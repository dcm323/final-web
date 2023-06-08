import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { database, subirImagen } from '../../../config/database.jsx'
import { addDoc, collection } from 'firebase/firestore'
import Header from '../../helpers/Header.jsx'

const CrearProductos = () => {
  const [cantidad, setCantidad] = useState('')
  const [categoria, setCategoria] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [nombre, setNombre] = useState('')
  const [img, setImg] = useState(null)
  const [valor, setValor] = useState('')

  const returnListado = useNavigate()

  const agregar = async () => {
    const urlImg = await subirImagen(img)
    const productoColeccion = collection(database, 'productos')
    const producto = {
      cantidad,
      categoria,
      descripcion,
      nombre,
      urlImg,
      valor,
    }

    await addDoc(productoColeccion, producto)
    returnListado('/listarProducto')
  }

  return (
    <>
      <Header />
      <main>
        <form>
          <input
            onChange={(e) => setNombre(e.target.value)}
            placeholder={'Nombre: '}
            type='text'
          />
          <input
            onChange={(e) => setDescripcion(e.target.value)}
            placeholder={'Descripcion: '}
            type='text'
          />
          <input
            onChange={(e) => setCategoria(e.target.value)}
            placeholder={'Categoria: '}
            type='text'
          />
          <input
            onChange={(e) => setCantidad(e.target.value)}
            placeholder={'Cantidad: '}
            type='text'
          />
          <input
            onChange={(e) => setValor(e.target.value)}
            placeholder={'Valor: '}
            type='text'
          />
          <input onChange={(e) => setImg(e.target.files[0])} type='file' />
          <input onClick={agregar} type='button' value='Agregar' />
        </form>
      </main>
    </>
  )
}

export default CrearProductos
