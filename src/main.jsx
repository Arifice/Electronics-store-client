import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';

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
import ErrorPage from './Components/ErrorPage';
import Home from './Components/Home';
import ProductCategory from './Components/ProductCategory';







const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('brand.json')        
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
        loader:()=>fetch('https://b8a10-brandshop-server-side-arifice-qyfc.vercel.app/product')
      },
      {
        path:'/mycart',
        element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader:()=>fetch('https://b8a10-brandshop-server-side-arifice-qyfc.vercel.app/cart')        
      },
      {
        path: '/user',
        element:<PrivateRoute><User></User></PrivateRoute>,
        loader:()=>fetch('https://b8a10-brandshop-server-side-arifice-qyfc.vercel.app/user')
      },
      {
        path:'/updateProduct/:id',
        element:<UpdateProduct></UpdateProduct>,
        loader:({params})=>fetch(`https://b8a10-brandshop-server-side-arifice-qyfc.vercel.app/product/${params.id}`)
      },
      {
        path:'/details/:id',
        element:<PrivateRoute><DetailsProduct></DetailsProduct></PrivateRoute>,
        loader:({params})=>fetch(`https://b8a10-brandshop-server-side-arifice-qyfc.vercel.app/product/${params.id}`)
      },
      {
        path:'/updateUser/:id',
        element:<UpdateUser></UpdateUser>,
        loader:({params})=>fetch(`https://b8a10-brandshop-server-side-arifice-qyfc.vercel.app/user/${params.id}`)
      }, 
      {
        path:'/category/:id',
        element:<ProductCategory></ProductCategory>        
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
