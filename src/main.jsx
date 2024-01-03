import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/about.jsx';
import Contact from './components/Contacts/Contact.jsx';
import User from "./components/User/Users.jsx"
import GitHub from './components/GitHub/Github.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout/>,
    children : [
      {
        path : "",
        element : <Home/>
      },
      {
        path : "about",
        element : <About></About>
      },
      {
        path : "contact",
        element : <Contact/>
      },
      {
        path : "user/:userid",
        element : <User/>
      },
      {
        path : "github",
        element: <GitHub/>
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
