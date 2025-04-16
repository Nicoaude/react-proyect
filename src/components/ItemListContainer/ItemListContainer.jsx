"use client"

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import { getProducts, getProductsByCategory, seedProducts } from "../../services/firebase/firestore/products"
import "./ItemListContainer.css"

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)

    const fetchProducts = async () => {
      try {
        let fetchedProducts
        if (categoryId) {
          fetchedProducts = await getProductsByCategory(categoryId)
        } else {
          fetchedProducts = await getProducts()
        }
        if (fetchedProducts.length === 0) {
          if (categoryId) {
            fetchedProducts = seedProducts.filter((prod) => prod.category === categoryId)
          } else {
            fetchedProducts = seedProducts
          }
        }

        setProducts(fetchedProducts)
      } catch (error) {
        console.error("Error al cargar productos:", error)
        setError("Error cargando los productos. Usando datos locales.")

        if (categoryId) {
          setProducts(seedProducts.filter((prod) => prod.category === categoryId))
        } else {
          setProducts(seedProducts)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [categoryId])

  if (loading) {
    return <div className="loading">Cargando productos...</div>
  }

  return (
    <div className="item-list-container container">
      {error && <div className="error-message">{error}</div>}
      {greeting && <h2 className="greeting">{greeting}</h2>}
      <h2 className="section-title">
        {categoryId
          ? `${categoryId.charAt(0).toUpperCase() + categoryId.slice(1).replace("-", " ")}`
          : "Todos los Componentes"}
      </h2>
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer
