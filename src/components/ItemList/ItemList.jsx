import Item from "../Item/Item"
import "./ItemList.css"

const ItemList = ({ products }) => {
  if (products.length === 0) {
    return <p className="no-products">No hay productos disponibles en esta categoría.</p>
  }

  return (
    <div className="item-list">
      {products.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  )
}

export default ItemList
