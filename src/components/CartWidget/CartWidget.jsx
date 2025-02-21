import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
  return (
    <div className="cart-widget d-flex align-items-center">
      <FaShoppingCart size={24} />
      <span className="badge bg-danger ms-2">3</span>
    </div>
  );
};

export default CartWidget;
