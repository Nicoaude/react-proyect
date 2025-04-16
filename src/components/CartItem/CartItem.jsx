"use client"

import "./CartItem.css"

const CartItem = ({ id, name, quantity, price, img, removeItem }) => {
  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img
          src={img || "/placeholder.svg?text=Sin+Imagen"}
          alt={name}
          onError={(e) => {
            e.target.onerror = null
            e.target.src = "https://placehold.co/300x300/cccccc/333333?text=Sin+Imagen"
          }}
        />
      </div>
      <div className="cart-item-details">
        <h3 className="cart-item-name">{name}</h3>
        <p className="cart-item-price">Precio: ${price.toLocaleString()}</p>
        <p className="cart-item-quantity">Cantidad: {quantity}</p>
        <p className="cart-item-subtotal">Subtotal: ${(price * quantity).toLocaleString()}</p>
      </div>
      <button className="cart-item-remove" onClick={() => removeItem(id)} aria-label="Eliminar producto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          <line x1="10" y1="11" x2="10" y2="17"></line>
          <line x1="14" y1="11" x2="14" y2="17"></line>
        </svg>
      </button>
    </div>
  )
}

export default CartItem
