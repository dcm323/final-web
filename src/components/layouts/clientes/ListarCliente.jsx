import React from 'react'
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { database } from '../../../config/database'
import { Link } from 'react-router-dom'
import Header from '../../helpers/Header'

const ListarCliente = () => {
  const [clientes, setClientes] = useState([])

  const mostrarClientes = async () => {
    const clientesCollection = collection(database, 'clientes')
    const data = await getDocs(clientesCollection)
    setClientes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }
  const eliminarCliente = async (id) => {
    const servicioEliminado = doc(database, 'clientes', id)
    await deleteDoc(servicioEliminado)
    mostrarClientes()
  }
  useEffect(() => {
    mostrarClientes()
  }, [])

  return (
    <>
      <Header />
      <main>
        <section className='cards-container'>
          {clientes.map((data) => (
            <section className='card-item' key={data.id}>
              <h1>{data.nombre}</h1>
              <img className='img-lista' src={data.urlImg} />
              <h1>{data.documento}</h1>
              <h1>{data.correo}</h1>
              <h1>{data.telefono}</h1>
              <h1>{data.direccion}</h1>
              <h1>{data.barrio}</h1>
              <h1>{data.ciudad}</h1>
              <button
                onClick={() => {
                  eliminarCliente(data.id)
                }}
              >
                Eliminar
              </button>
              <button>
                <Link to={'/editarCliente/' + data.id}>Edit</Link>
              </button>
            </section>
          ))}
        </section>
      </main>
    </>
  )
}

export default ListarCliente
