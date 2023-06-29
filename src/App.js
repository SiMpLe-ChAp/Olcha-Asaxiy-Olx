import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './router/Home/Home'
import Whishlist from './router/whishlist/Whishlist'
import Login from './router/login/Login'
import Qualified from './router/Qualified/Qualified'
import Cart from './router/Cart/Cart'
import Singlerouter from './router/singleroute/Singleroute'
import Admin from './router/admin/Admin'
import Auth from './router/auth/Auth'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/whishlist' element={<Whishlist/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Qualified' element={<Qualified/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        {/* agar /admin/* bolsa bu admin ichida nimadir borligini bildiradi */}
        <Route path="/single-product/:id" element={<Singlerouter />} /> 
        <Route path='/' element={<Auth/>}>
              <Route path='/admin/*' element={<Admin/>}/>
        </Route>
      </Routes>
      <Footer/>
      <ToastContainer/>
    </div>
  )
}

export default App