import { Link } from "react-router-dom"
import "./Item.css"

const Item = ({ id, name, img, price, stock }) => {
  return (
    <article className="item-card">
      <div className="item-image-container">
        <img
          src={img || "/placeholder.svg?text=Sin+Imagen"}
          alt={name}
          className="item-image"
          onError={(e) => {
            e.target.onerror = null
            e.target.src = "https://placehold.co/300x300/cccccc/333333?text=Sin+Imagen"
          }}
        />
      </div>
      <div className="item-content">
        <h3 className="item-name">{name}</h3>
        <p className="item-price">${price.toLocaleString()}</p>
        {stock > 0 ? (
          <p className="item-stock">Stock disponible: {stock}</p>
        ) : (
          <p className="item-no-stock">Sin stock</p>
        )}
        <Link to={`/item/${id}`} className="btn btn-primary item-button">
          Ver detalle
        </Link>
      </div>
    </article>
  )
}

export default Item
