"use client"

import { Link, useNavigate } from "react-router-dom"
import { ShoppingCart, Cpu, Monitor, HardDrive } from "lucide-react"
import { useState } from "react"
import "../styles/Navbar.css"

const Navbar = () => {
  const [cartItems, setCartItems] = useState(0)
  const navigate = useNavigate()

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="logo">
          <Cpu size={24} />
          <span>TechComponents</span>
        </Link>
      </div>

      <div className="navbar-categories">
        <button onClick={() => navigate("/category/processors")}>
          <Cpu size={16} />
          Procesadores
        </button>
        <button onClick={() => navigate("/category/monitors")}>
          <Monitor size={16} />
          Monitores
        </button>
        <button onClick={() => navigate("/category/storage")}>
          <HardDrive size={16} />
          Almacenamiento
        </button>
      </div>

      <div className="navbar-cart">
        <button className="cart-button">
          <ShoppingCart size={20} />
          <span className="cart-count">{cartItems}</span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar

