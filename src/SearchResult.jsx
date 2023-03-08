import SearchProduct from "./SerachProduct";

function SearchResult(props) {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <h2> Search Result</h2>
      {props.products.slice(0, 100).map((product) => (
        <SearchProduct
          key={product.id}
          product={product}
          onAddToCart={() => props.onAddToCart(product.id)}
        />
      ))}
    </div>
  );
}

export default SearchResult;
