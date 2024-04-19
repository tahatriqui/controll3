import React, { useState } from 'react'
import Ecom from './components/ecom'
import Panier from './components/panier'
import {BrowserRouter,Route, Routes} from "react-router-dom"
import "./App.css"
const App = () => {
  const [store,setStore] = useState([])
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Ecom store={store} setStore={setStore}/>}/>
      <Route path='/panier' element={<Panier  store={store} setStore={setStore}/>}/>
    </Routes>
    </BrowserRouter>
     
  )
}

export default App