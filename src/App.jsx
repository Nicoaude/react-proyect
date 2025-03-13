import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Catalog from "./pages/Catalog"
import ProductDetail from "./pages/ProductDetail"
import CategoryProducts from "./pages/CategoryProducts"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Catalog />} />
            <Route path="/category/:categoryId" element={<CategoryProducts />} />
            <Route path="/item/:id" element={<ProductDetail />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App

