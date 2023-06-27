import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { database } from '../../../config/database'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { useEffect } from 'react'
import Header from '../../helpers/Header'

const EditarEmpleado = () => {
  const [nombre, setNombre] = useState('')
  const [documento, setDocumento] = useState('')
  const [correo, setCorreo] = useState('')
  const [cargo, setCargo] = useState('')
  const [salario, setSalario] = useState('')
  const [direccioResidencia, setDireccionRecidencia] = useState('')
  const [numeroCuentaBancaria, setCuentaBancaria] = useState('')

  const returnListado = useNavigate()
  const { id } = useParams()

  const editarEmpleado = async () => {
    const empleadoCollection = doc(database, 'empleados', id)
    const empleado = {
      nombre,
      documento,
      correo,
      cargo,
      salario,
      direccioResidencia,
      numeroCuentaBancaria,
    }
    await updateDoc(empleadoCollection, empleado)
    returnListado('/listarEmpleado')
  }

  const empleadoActualizado = async (id) => {
    const empleadoEdit = await getDoc(doc(database, 'empleados', id))
    setNombre(empleadoEdit.data().nombre)
    setDocumento(empleadoEdit.data().documento)
    setCorreo(empleadoEdit.data().correo)
    setCargo(empleadoEdit.data().cargo)
    setSalario(empleadoEdit.data().salario)
    setDireccionRecidencia(empleadoEdit.data().direccioResidencia)
    setCuentaBancaria(empleadoEdit.data().numeroCuentaBancaria)
  }
  useEffect(() => {
    empleadoActualizado(id)
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
            onChange={(e) => setDocumento(e.target.value)}
            placeholder={documento}
            type='text'
          />
        </div>
        <div className='form-group form-control-sm'>
          <input
            className='form-control'
            onChange={(e) => setCorreo(e.target.value)}
            placeholder={correo}
            type='text'
          />
        </div>
        <div className='form-group form-control-sm'>
          <input
            className='form-control'
            onChange={(e) => setCargo(e.target.value)}
            placeholder={cargo}
            type='text'
          />
        </div>
        <div className='form-group form-control-sm'>
          <input
            className='form-control'
            onChange={(e) => setSalario(e.target.value)}
            placeholder={salario}
            type='text'
          />
        </div>
        <div className='form-group form-control-sm'>
          <input
            className='form-control'
            onChange={(e) => setDireccionRecidencia(e.target.value)}
            placeholder={direccioResidencia}
            type='text'
          />
        </div>
        <div className='form-group form-control-sm'>
          <input
            className='form-control'
            onChange={(e) => setCuentaBancaria(e.target.value)}
            placeholder={numeroCuentaBancaria}
            type='text'
          />
        </div>
        <div className='form-group form-control-sm'>
          <input
            className='btn btn-primary'
            onClick={editarEmpleado}
            type='button'
            value={'Editar'}
          />
        </div>
      </form>
    </>
  )
}

export default EditarEmpleado
