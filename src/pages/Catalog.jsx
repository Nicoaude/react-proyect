"use client"

import { useState, useEffect } from "react"
import ProductCard from "../components/ProductCard"
import { getAllProducts } from "../services/productService"
import "../styles/Catalog.css"

const Catalog = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts()
        setProducts(data)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching products:", error)
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) {
    return <div className="loading">Cargando productos...</div>
  }

  return (
    <div className="catalog-container">
      <h1 className="catalog-title">Desde aquí podrás ver un listado de todas las categorías</h1>
      <button className="stock-button">Ver artículos en stock disponible</button>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Catalog

