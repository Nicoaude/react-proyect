"use client"

import "./ItemQuantitySelector.css"

const ItemQuantitySelector = ({ quantity, stock, onAdd }) => {
  const increment = () => {
    if (quantity < stock) {
      onAdd(quantity + 1)
    }
  }

  const decrement = () => {
    if (quantity > 1) {
      onAdd(quantity - 1)
    }
  }

  return (
    <div className="quantity-selector">
      <button className="quantity-button" onClick={decrement} disabled={quantity <= 1}>
        -
      </button>
      <span className="quantity-value">{quantity}</span>
      <button className="quantity-button" onClick={increment} disabled={quantity >= stock}>
        +
      </button>
    </div>
  )
}

export default ItemQuantitySelector
