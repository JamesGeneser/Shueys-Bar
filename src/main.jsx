import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import './index.css'
import Root from './Routes/root.jsx'
import ErrorPage from './Routes/Pages/Error.jsx'
import Menu from './Routes/Pages/Menu.jsx'
import Home from './Routes/Pages/Home.jsx'
import Contact from './Routes/Pages/Contact.jsx'
import About from './routes/Pages/About.jsx'
import Apply from './routes/Pages/Apply.jsx'



// const router = createBrowserRouter(

//   [
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     children:[
//       {
//         path: "/menu",
//         element: <Menu/>,
//       },
//       {
//         path: "/contact",
//         element: <Contact/>,
//       },
//       {
//         path: "/about",
//         element: <About/>,
//       },
//       {
//         path: "/apply",
//         element: <Apply/>,
//       }
//     ]
//   },
// ]


// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>    <App /></BrowserRouter>

  </React.StrictMode>,
)
