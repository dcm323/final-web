import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/layouts/Home'
import CrearCliente from './components/layouts/clientes/CrearCliente'
import ListarCliente from './components/layouts/clientes/ListarCliente'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/crearCliente',
    element: <CrearCliente />,
  },
  {
    path: '/listarCliente',
    element: <ListarCliente />,
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
