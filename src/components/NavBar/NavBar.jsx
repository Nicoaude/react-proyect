import CartWidget from "../CartWidget/CartWidget";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css"; 

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary w-100">
      <div className="container-fluid"> 
        <a className="navbar-brand" href="#">Detailing Store</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Productos de interior</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Productos de exterior</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pulimentos</a>
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
