import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./index.css";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Tienda oficial de detailing" />
    </>
  );
}

export default App;
