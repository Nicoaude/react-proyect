"use client"

import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import ItemQuantitySelector from "../ItemQuantitySelector/ItemQuantitySelector"
import "./ItemDetail.css"

const ItemDetail = ({ id, name, category, img, price, stock, description }) => {
  const [quantity, setQuantity] = useState(1)
  const [addedToCart, setAddedToCart] = useState(false)

  const { addItem, isInCart } = useContext(CartContext)

  const handleOnAdd = () => {
    const productToAdd = {
      id,
      name,
      price,
      img,
      quantity,
    }

    addItem(productToAdd)
    setAddedToCart(true)
  }

  return (
    <article className="item-detail">
      <div className="item-detail-image">
        <img
          src={img || "/placeholder.svg?text=Sin+Imagen"}
          alt={name}
          onError={(e) => {
            e.target.onerror = null
            e.target.src = "https://placehold.co/300x300/cccccc/333333?text=Sin+Imagen"
          }}
        />
      </div>
      <div className="item-detail-content">
        <h2 className="item-detail-name">{name}</h2>
        <p className="item-detail-category">Categoría: {category?.replace("-", " ")}</p>
        <p className="item-detail-price">${price.toLocaleString()}</p>

        <div className="item-detail-description">
          <h3>Descripción:</h3>
          <p>{description}</p>
        </div>

        {stock > 0 ? (
          <>
            <p className="item-detail-stock">Stock disponible: {stock}</p>

            {!addedToCart && !isInCart(id) ? (
              <>
                <ItemQuantitySelector quantity={quantity} stock={stock} onAdd={(qty) => setQuantity(qty)} />
                <button className="btn btn-secondary add-to-cart-button" onClick={handleOnAdd} disabled={stock === 0}>
                  Agregar al carrito
                </button>
              </>
            ) : (
              <div className="item-detail-buttons">
                <Link to="/cart" className="btn btn-primary">
                  Ir al carrito
                </Link>
                <Link to="/" className="btn btn-secondary">
                  Seguir comprando
                </Link>
              </div>
            )}
          </>
        ) : (
          <p className="item-detail-no-stock">Producto sin stock</p>
        )}
      </div>
    </article>
  )
}

export default ItemDetail
