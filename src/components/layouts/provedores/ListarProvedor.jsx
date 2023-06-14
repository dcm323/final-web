import React from 'react'
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { database } from '../../../config/database'
import { Link } from 'react-router-dom'
import Header from '../../helpers/Header'

const ListarProvedor = () => {
  const [provedores, setProvedores] = useState([])

  const mostrarProvedor = async () => {
    const provedoresCollection = collection(database, 'provedores')
    const data = await getDocs(provedoresCollection)
    setProvedores(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }
  const eliminarProvedor = async (id) => {
    const servicioEliminado = doc(database, 'provedores', id)
    await deleteDoc(servicioEliminado)
    mostrarProvedor()
  }
  useEffect(() => {
    mostrarProvedor()
  }, [])

  return (
    <>
      <Header />
      <Link to={'/crearProvedor'}>Agregar Provedor Nuevor</Link>
      <main>
        <section className='cards-container'>
          {provedores.map((data) => (
            <section className='card-item' key={data.id}>
              <img className='img-lista' src={data.urlImgG} />
              <img className='img-lista' src={data.urlImgL} />
              <h1>{data.nombre}</h1>
              <h1>{data.direccion}</h1>
              <h1>{data.ciudad}</h1>
              <h1>{data.nit}</h1>
              <h1>{data.nombreGerente}</h1>
              <h1>{data.telefono}</h1>
              <h1>{data.ciudad}</h1>
              <button
                onClick={() => {
                  eliminarProvedor(data.id)
                }}
              >
                Eliminar
              </button>
              <button>
                <Link to={'/editarProvedor/' + data.id}>Edit</Link>
              </button>
            </section>
          ))}
        </section>
      </main>
    </>
  )
}

export default ListarProvedor
