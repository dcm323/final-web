import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/layouts/Home'
import CrearCliente from './components/layouts/clientes/CrearCliente'
import ListarCliente from './components/layouts/clientes/ListarCliente'
import EditarCliente from './components/layouts/clientes/EditarCliente'

import CrearProvedor from './components/layouts/provedores/CrearProvedor'
import Provedores from './components/layouts/provedores/view/Provedores'
import ListarProvedor from './components/layouts/provedores/ListarProvedor'
import EditarProvedor from './components/layouts/provedores/EditarProvedor'

import CrearProductos from './components/layouts/productos/CrearProductos'
import EditarProductos from './components/layouts/productos/EditarProductos'
import ListarProductos from './components/layouts/productos/ListarProductos'
import Movies from './components/layouts/Movies'

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
    path: '/crearProvedor/',
    element: <CrearProvedor />,
  },

  {
    path: '/crearProvedor',
    element: <CrearProvedor />,
  },
  {
    path: '/listarProvedor',
    element: <ListarProvedor />,
  },
  {
    path: '/editarProvedor/:id',
    element: <EditarProvedor />,
  },
  {
    path: '/provedores',
    element: <Provedores />,
  },
  {
    path: '/editarProvedor/:id',
    element: <EditarProvedor />,
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
  {
    path: '/movies',
    element: <Movies />,
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
