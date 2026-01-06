import { useState } from 'react'
import './App.css'
import {BrowserRouter, Route,Routes } from 'react-router-dom'
import Header from './components/Header.jsx'
import Topcards from './components/Topcards.jsx'
import Dashboard from './components/Dashboard.jsx'
import Orders from './components/Orders.jsx'
import Products from './components/Products.jsx'
import Homeslides from './components/Homeslides.jsx'
import Users from './components/Users.jsx'
import Addproducts from './components/Addproducts.jsx'
import Addbanners from './components/Addbanners.jsx'

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Topcards/>
    <Routes>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/orders' element={<Orders/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/homeslides' element={<Homeslides/>}/>
       <Route path='/users' element={<Users/>}/>
      <Route path='/addproducts' element={<Addproducts/>}/>
      <Route path='/addbanners' element={<Addbanners/>}/>

    </Routes>
    </BrowserRouter>
      </>
  )
}
export default App
