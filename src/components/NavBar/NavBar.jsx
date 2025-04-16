import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"

const NavBar = () => {
  const categories = [
    { id: "procesadores", name: "Procesadores" },
    { id: "tarjetas-graficas", name: "Tarjetas Gráficas" },
    { id: "placas-base", name: "Motherboard" },
    { id: "memorias", name: "Memorias RAM" },
    { id: "almacenamiento", name: "Almacenamiento" },
    { id: "fuentes", name: "Fuentes" },
    { id: "gabinetes", name: "Gabinetes" },
  ]

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <h1>TechComponents</h1>
        </Link>
        <div className="navbar-menu">
          <ul className="navbar-links">
            {categories.map((cat) => (
              <li key={cat.id} className="navbar-item">
                <Link to={`/category/${cat.id}`} className="navbar-link">
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link to="/cart" className="cart-widget-container">
          <CartWidget />
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
