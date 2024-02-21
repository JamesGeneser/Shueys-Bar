
import './App.css'
import React from 'react'
import Home from './Routes/Pages/Home';
import Menu from './Routes/Pages/Menu';
import Navigation from './Components/navbar';
import Apply from './Routes/Pages/Apply';
import {Routes, Route, Outlet, Link} from 'react-router-dom'
import Contact from './Routes/Pages/Contact';
import About from './routes/Pages/About';
import Footer from './Components/footer';



function App() {


  return (
    <>
        <Navigation/>
    

    <Routes>

      <Route path="Shueys-Bar/" element={<Home/>} />
      <Route path="Shueys-Bar/menu" element={<Menu/>} />
      <Route path="Shueys-Bar/contact" element={<Contact/>} />
      <Route path="Shueys-Bar/about" element={<About/>} />
      <Route path="Shueys-Bar/apply" element={<Apply/>} />

    </Routes>
  <Footer/>

    </>
  )
}

export default App
