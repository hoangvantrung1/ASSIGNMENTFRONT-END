import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home'
import Footer from './components/footer'
import Productlist from './components/productlist'
import { Route, Routes } from 'react-router-dom'
import Category from './components/category'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/product' Component={Productlist}/>
          <Route path='/category' Component={Category}/>
      </Routes>
    </>
  )
}

export default App
