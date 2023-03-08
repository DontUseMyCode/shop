// import data from "./data.json"; // why import if not used?

function SearchProduct(props) {
  console.log("SearchProduct props: ", props);
  return (
    <div style={{ border: "1px solid white", margin: "1em" }}>
      <img width={"100px"} height={"100px"} src={props.product.image} alt="product_image"/>
      <h3>{props.product.name} ({props.product.id})</h3>
      <h3>{props.product.price} SEK</h3>
      <button onClick={props.onAddToCart}>Add to cart</button>
    </div>
  );
}
export default SearchProduct;
