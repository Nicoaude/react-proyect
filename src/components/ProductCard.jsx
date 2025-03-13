import { Link } from "react-router-dom"
import "../styles/ProductCard.css"

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image || "/placeholder.svg"} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <div className="product-footer">
        <p className="product-stock">Stock disponible: {product.stock}</p>
        <Link to={`/item/${product.id}`} className="view-details-button">
          Ver detalle del producto
        </Link>
      </div>
    </div>
  )
}

export default ProductCard

