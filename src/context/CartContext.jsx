"use client"

import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addItem = (productToAdd) => {
    if (!isInCart(productToAdd.id)) {
      setCart((prev) => [...prev, productToAdd])
    } else {
      const updatedCart = cart.map((item) => {
        if (item.id === productToAdd.id) {
          return {
            ...item,
            quantity: productToAdd.quantity,
          }
        }
        return item
      })
      setCart(updatedCart)
    }
  }

  const removeItem = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId)
    setCart(updatedCart)
  }

  const clearCart = () => {
    setCart([])
  }

  const isInCart = (itemId) => {
    return cart.some((item) => item.id === itemId)
  }

  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        isInCart,
        getTotalQuantity,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
