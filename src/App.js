import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { About, AddProduct, AllItems, Home } from './pages'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path="/all-items" element={<AllItems />} />
        <Route path="/add-product" element = {<AddProduct />} />
      </Routes>
    </Router>
  )
}

export default App