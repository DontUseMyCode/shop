import data from "./data.json";

function ShoppingCart(props) {

  console.log(props);
  let totPrice = 0;

  for (let i = 0; i < props.addedProducts.length; ++i) {
    const count = props.addedProducts[i].count;
    const prodId = props.addedProducts[i].productId;
   const product = allProducts.find(p=> p.id === prodId)!;
    totPrice += product.price * count;
  }
  return (
    <div>
      <h2> Shopping Cart </h2>

      {props.addedProducts
        .filter((addedProd) => addedProd.count > 0)
        .map((addedProd) => {
          return (
            <div
              // key={addedProd.productId}
              style={{ border: "1px solid white", margin: "1em" }}
            >
              <div>
                <label> Product Id: </label>
                {addedProd.productId}
              </div>
              <div>
                <label> Count : </label>
                {addedProd.count}
              </div>
              <div>
                {
                  <button onClick={() => props.onRemove(addedProd.productId)}>
                    Remove
                  </button>
                }
              </div>
            </div>
          );
        })}

      <h2>Total Price : {totPrice} SEK</h2>
    </div>
  );
}
export default ShoppingCart;
