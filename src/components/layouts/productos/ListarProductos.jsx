import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { database } from '../../../config/database'
import { Link } from 'react-router-dom'

const ListarProductos = () => {
  const [productos, setProductos] = useState([])

  const mostrar = async () => {
    const coleccion = collection(database, 'productos')
    const data = await getDocs(coleccion)
    setProductos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }

  const eliminar = async (id) => {
    const productoEliminado = doc(database, 'productos', id)
    await deleteDoc(productoEliminado)
    mostrar()
  }

  useEffect(() => {
    mostrar()
  }, [])

  return (
    <>
      <Header />
      <main>
        <section className='cards-container'>
          {productos.map((data) => (
            <section className='card-item' key={data.id}>
              <h1>{data.nombre}</h1>
              <img className='img-lista' src={data.url} />
              <h1>{data.descripcion}</h1>
              <h1>{data.categoria}</h1>
              <h1>{data.cantidad}</h1>
              <h1>{data.valor}</h1>
              <button
                onClick={() => {
                  eliminar(data.id)
                }}
              >
                Eliminar
              </button>
              <button>
                <Link to={'/editarProducto/' + data.id}>Editar</Link>
              </button>
            </section>
          ))}
        </section>
      </main>
    </>
  )
}

export default ListarProductos
