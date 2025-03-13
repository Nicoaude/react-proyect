"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import ProductCard from "../components/ProductCard"
import { getProductsByCategory } from "../services/productService"
import "../styles/CategoryProducts.css"

const CategoryProducts = () => {
  const { categoryId } = useParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [categoryName, setCategoryName] = useState("")

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        const data = await getProductsByCategory(categoryId)
        setProducts(data.products)
        setCategoryName(data.categoryName)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching category products:", error)
        setLoading(false)
      }
    }

    fetchCategoryProducts()
  }, [categoryId])

  if (loading) {
    return <div className="loading">Cargando productos de la categoría...</div>
  }

  return (
    <div className="category-products-container">
      <div className="category-header">
        <h1 className="category-title">{categoryName}</h1>
        <Link to="/" className="back-link">
          ← Volver al catálogo
        </Link>
      </div>

      {products.length === 0 ? (
        <p className="no-products">No hay productos disponibles en esta categoría.</p>
      ) : (
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

export default CategoryProducts

