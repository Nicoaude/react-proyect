"use client"

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getProductById, seedProducts } from "../../services/firebase/firestore/products"
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const { itemId } = useParams()

  useEffect(() => {
    setLoading(true)

    const fetchProduct = async () => {
      try {
        const fetchedProduct = await getProductById(itemId)
        setProduct(fetchedProduct)
      } catch (error) {
        console.error("Error al cargar el producto:", error)
        setError("Error cargando el detalle del producto. Usando datos locales.")

        // Si hay un error, buscamos en los datos de ejemplo
        const localProduct = seedProducts.find((p) => p.id === itemId)
        if (localProduct) {
          setProduct(localProduct)
        } else {
          setError("El producto no existe")
        }
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [itemId])

  if (loading) {
    return <div className="loading">Cargando detalle del producto...</div>
  }

  if (error && !product) {
    return <div className="error">{error}</div>
  }

  if (!product) {
    return <div className="error">El producto no existe</div>
  }

  return (
    <div className="item-detail-container container">
      {error && <div className="error-message">{error}</div>}
      <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer
