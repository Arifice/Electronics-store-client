import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Home from './Components/Home';
import Addproduct from './Components/Addproduct';
import Login from './Components/Login';
import Register from './Components/Register';
import MyCart from './Components/MyCart';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/addproduct',
        element:<Addproduct></Addproduct>
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element:<Register></Register>
      },
      {
        path:'/mycart',
        element:<MyCart></MyCart>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
