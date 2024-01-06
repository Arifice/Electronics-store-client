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
import UpdateUser from './Components/UpdateUser';
import PrivateRoute from './Components/PrivateRoute';



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
        element:<PrivateRoute><Addproduct></Addproduct></PrivateRoute>
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
        element:<PrivateRoute><Product></Product></PrivateRoute>,
        loader:()=>fetch('http://localhost:5000/product')
      },
      {
        path:'/mycart',
        element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader:()=>fetch('http://localhost:5000/cart')        
      },
      {
        path: '/user',
        element:<PrivateRoute><User></User></PrivateRoute>,
        loader:()=>fetch('http://localhost:5000/user')
      },
      {
        path:'/updateProduct/:id',
        element:<UpdateProduct></UpdateProduct>,
        loader:({params})=>fetch(`http://localhost:5000/product/${params.id}`)
      },
      {
        path:'/product/:id',
        element:<PrivateRoute><DetailsProduct></DetailsProduct></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/product/${params.id}`)
      },
      {
        path:'/updateUser/:id',
        element:<UpdateUser></UpdateUser>,
        loader:({params})=>fetch(`http://localhost:5000/user/${params.id}`)
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
