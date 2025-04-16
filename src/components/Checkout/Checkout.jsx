"use client"

import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { createOrder } from "../../services/firebase/firestore/orders"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import "./Checkout.css"

const Checkout = () => {
  const [loading, setLoading] = useState(false)
  const [orderId, setOrderId] = useState("")
  const [error, setError] = useState(null)

  const { cart, getTotalPrice, clearCart } = useContext(CartContext)
  const navigate = useNavigate()

  const totalPrice = getTotalPrice()

  if (cart.length === 0 && !orderId) {
    navigate("/")
    return null
  }

  const createOrderHandler = async (userData) => {
    try {
      setLoading(true)

      const order = {
        buyer: userData,
        items: cart.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),
        total: totalPrice,
        date: new Date(),
      }

      const id = await createOrder(order)
      setOrderId(id)
      clearCart()
    } catch (error) {
      console.error("Error al crear la orden:", error)
      setError("Error al procesar la orden. Por favor intente nuevamente.")
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div className="loading">Procesando su orden...</div>
  }

  if (error) {
    return <div className="error">{error}</div>
  }

  return (
    <div className="checkout-container container">
      <h2 className="section-title">Checkout</h2>

      {orderId ? (
        <div className="order-confirmation">
          <h3>¡Gracias por tu compra!</h3>
          <p>Tu orden ha sido procesada correctamente.</p>
          <p className="order-id">
            ID de orden: <span>{orderId}</span>
          </p>
          <button className="btn btn-primary" onClick={() => navigate("/")}>
            Volver a la tienda
          </button>
        </div>
      ) : (
        <>
          <div className="checkout-summary">
            <h3>Resumen de compra</h3>
            <ul className="checkout-items">
              {cart.map((item) => (
                <li key={item.id} className="checkout-item">
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toLocaleString()}</span>
                </li>
              ))}
            </ul>
            <div className="checkout-total">
              <span>Total:</span>
              <span>${totalPrice.toLocaleString()}</span>
            </div>
          </div>

          <div className="checkout-form-container">
            <h3>Información de contacto</h3>
            <CheckoutForm onConfirm={createOrderHandler} />
          </div>
        </>
      )}
    </div>
  )
}

export default Checkout
