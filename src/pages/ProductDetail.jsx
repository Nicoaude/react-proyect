"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { getProductById } from "../services/productService"
import "../styles/ProductDetail.css"

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id)
        setProduct(data)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching product details:", error)
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  const handleAddToCart = () => {
    alert(`Agregado al carrito: ${quantity} unidad(es) de ${product.name}`)
  }

  if (loading) {
    return <div className="loading">Cargando detalles del producto...</div>
  }

  if (!product) {
    return <div className="error">Producto no encontrado</div>
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail-navigation">
        <Link to="/" className="back-link">
          ← Volver al catálogo
        </Link>
      </div>

      <div className="product-detail-content">
        <div className="product-detail-image">
          <img src={product.image || "/placeholder.svg"} alt={product.name} />
        </div>

        <div className="product-detail-info">
          <h1 className="product-detail-name">{product.name}</h1>
          <p className="product-detail-category">Categoría: {product.category}</p>
          <p className="product-detail-price">${product.price.toFixed(2)}</p>
          <p className="product-detail-stock">Stock disponible: {product.stock}</p>

          <div className="product-detail-description">
            <h3>Descripción:</h3>
            <p>{product.description}</p>
          </div>

          <div className="product-detail-specs">
            <h3>Especificaciones:</h3>
            <ul>
              {product.specs.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>

          <div className="product-detail-actions">
            <div className="quantity-selector">
              <button onClick={() => setQuantity((prev) => Math.max(1, prev - 1))} disabled={quantity <= 1}>
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => setQuantity((prev) => Math.min(product.stock, prev + 1))}
                disabled={quantity >= product.stock}
              >
                +
              </button>
            </div>

            <button className="add-to-cart-button" onClick={handleAddToCart} disabled={product.stock === 0}>
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail

