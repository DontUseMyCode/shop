import data from "./data.json";

function SearchProduct(props) {
  return (
    <div style={{ border: "1px solid white", margin: "1em" }}>
      <img width={"100px"} height={"100px"} src={props.product.image} />
      <h3>{props.product.name}</h3>
      <h3>{props.product.price} SEK</h3>
      <button onClick={props.onAddToCart}>Add to cart</button>
    </div>
  );
}
export default SearchProduct;
