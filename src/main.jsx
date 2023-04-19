import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './Component/Shop/Shop';
import Home from './Component/Layout/Home';

import Login from './Component/Login/Login';
import Inventory from './Component/Inventory/Inventory';
import cartProductsLoader from './loaders/cartProductsLoaders';
import Orders from './Component/Order/Orders';
import CheckOut from './Component/CheckOut/CheckOut';
import SignUp from './Component/SignUp/SignUp';
import ContextProvider from './provider/ContextProvider';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: '/orders',
        element: <Orders></Orders>,
        loader: cartProductsLoader
      },
      {
        path: '/inventory',
        element: <Inventory></Inventory>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/checkout',
        element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>,
)
