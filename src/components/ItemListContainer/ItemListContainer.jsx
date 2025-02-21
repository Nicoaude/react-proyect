const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container text-center mt-4">
      <h2 className="p-3 bg-light border rounded">{greeting}</h2>
    </div>
  );
};

export default ItemListContainer;
