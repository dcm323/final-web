import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/layouts/Home'
import CrearCliente from './components/layouts/clientes/CrearCliente'
import ListarCliente from './components/layouts/clientes/ListarCliente'
import EditarCliente from './components/layouts/clientes/EditarCliente'
import CrearProductos from './components/layouts/productos/CrearProductos'
import EditarProductos from './components/layouts/productos/EditarProductos'
import ListarProductos from './components/layouts/productos/ListarProductos'

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
  {
    path: '/editarCliente/:id',
    element: <EditarCliente />,
  },
  {
    path: '/crearProducto',
    element: <CrearProductos />,
  },
  {
    path: '/listarProducto',
    element: <ListarProductos />,
  },
  {
    path: '/editarProducto/:id',
    element: <EditarProductos />,
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
