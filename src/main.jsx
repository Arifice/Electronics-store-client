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
import User from './Components/User';
import AuthProvider from './Provider/AuthProvider';
import UpdateProduct from './Components/UpdateProduct';
import DetailsProduct from './Components/DetailsProduct';
import Product from './Components/Product';



const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('http://localhost:5000/product')
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
        path:'/product',
        element:<Product></Product>,
        loader:()=>fetch('http://localhost:5000/product')
      },
      {
        path:'/mycart',
        element:<MyCart></MyCart>,
        
      },
      {
        path: '/user',
        element:<User></User>
      },
      {
        path:'/updateProduct/:id',
        element:<UpdateProduct></UpdateProduct>,
        loader:({params})=>fetch(`http://localhost:5000/product/${params.id}`)
      },
      {
        path:'/product/:id',
        element:<DetailsProduct></DetailsProduct>,
        loader:({params})=>fetch(`http://localhost:5000/product/${params.id}`)
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
      <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
)
