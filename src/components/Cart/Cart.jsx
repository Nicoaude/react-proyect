"use client"

import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"
import "./Cart.css"

const Cart = () => {
  const { cart, clearCart, removeItem, getTotalPrice } = useContext(CartContext)

  const totalPrice = getTotalPrice()

  if (cart.length === 0) {
    return (
      <div className="empty-cart container">
        <h2>Tu carrito está vacío</h2>
        <p>Agrega productos para comenzar tu compra</p>
        <Link to="/" className="btn btn-primary">
          Ir a la tienda
        </Link>
      </div>
    )
  }

  return (
    <div className="cart-container container">
      <h2 className="section-title">Tu Carrito</h2>

      <div className="cart-items">
        {cart.map((item) => (
          <CartItem key={item.id} {...item} removeItem={removeItem} />
        ))}
      </div>

      <div className="cart-summary">
        <div className="cart-total">
          <span>Total:</span>
          <span>${totalPrice.toLocaleString()}</span>
        </div>

        <div className="cart-actions">
          <button className="btn btn-danger" onClick={clearCart}>
            Vaciar carrito
          </button>
          <Link to="/checkout" className="btn btn-primary">
            Finalizar compra
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Cart
