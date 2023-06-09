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
  const [urlImg, setUrlImg] = useState(null)
  const [valor, setValor] = useState('')

  const returnListado = useNavigate()

  const agregar = async () => {
    const url = await subirImagen(urlImg)
    const productoColeccion = collection(database, 'productos')
    const producto = {
      cantidad,
      categoria,
      descripcion,
      nombre,
      url,
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
          <input onChange={(e) => setUrlImg(e.target.files[0])} type='file' />
          <input onClick={agregar} type='button' value='Agregar Cliente' />
        </form>
      </main>
    </>
  )
}

export default CrearProductos
