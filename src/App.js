import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { About, AddProduct, AllItems, Blog, Dashboard, Home, UpdateItem } from './pages'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path="/all-items" element={<AllItems />} />
        <Route path="/add-product" element = {<AddProduct />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/update-item" element={<UpdateItem />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  )
}

export default App