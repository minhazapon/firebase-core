import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mother from './Mother';

import Home from './Home';
import Login from './Login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Mother></Mother> ,
    children: [
      {
        path: "/",
        element: <Home></Home>  ,
      },
      {
        path: "/login",
        element: <Login></Login> ,
      },
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
