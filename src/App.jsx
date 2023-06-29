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

import CrearEmpleado from './components/layouts/empleados/CrearEmpleado'
import ListarEmpleado from './components/layouts/empleados/ListarEmpleado'
import EditarEmpleado from './components/layouts/empleados/EditarEmpleado'

import Movies from './components/layouts/Movies'
import Admin from './components/layouts/Admin'
import Commerce from './components/layouts/Commerce'
import Clientes from './components/layouts/clientes/view/Clientes'
import Productos from './components/layouts/productos/view/Productos'
import Empleados from './components/layouts/empleados/view/Empleados'
import Boveda from './components/layouts/contraseñas/view/Boveda'
import CrearWeb from './components/layouts/contraseñas/CrearWeb'
import ListarWeb from './components/layouts/contraseñas/ListarWebs'
import EditarWeb from './components/layouts/contraseñas/EditarWeb'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },

  //paths de clientes
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
    path: '/clientes',
    element: <Clientes />,
  },

  //paths de provedores
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

  //paths de productos
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
    path: '/productos',
    element: <Productos />,
  },
  //paths de empleados
  {
    path: '/crearEmpleado',
    element: <CrearEmpleado />,
  },
  {
    path: '/listarEmpleado',
    element: <ListarEmpleado />,
  },
  {
    path: '/editarEmpleado/:id',
    element: <EditarEmpleado />,
  },
  {
    path: '/empleados',
    element: <Empleados />,
  },
  //paths de Contraseñas
  {
    path:'/boveda',
    element:<Boveda/>
  },
  {
    path:'/crearWeb',
    element: <CrearWeb/>
  },
  {
    path:'/listarBoveda',
    element:<ListarWeb/>
  },
  {
    path:'/editarWeb/:id',
    element:<EditarWeb/>
  },

  //paths adicionales
  {
    path: '/movies',
    element: <Movies />,
  },
  {
    path: '/admin',
    element: <Admin />,
  },
  {
    path: '/commerce',
    element: <Commerce />,
  },
  {
    path:'/passwords',
    element:<Boveda/>
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
