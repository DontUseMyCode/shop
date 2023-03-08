import "./App.css";
// import SearchProduct from "./SerachProduct"; // another spelling mistake
// import SearchProduct from "./SearchProduct";  // 

import MagicShop from "./MagicShop";
// import data from "./data.json"; // Why include data here?

function App() {
  return (
    <div className="App">
      <MagicShop />
      {/* <SearchProduct />  What is this doing here? This is taking props, that why you are getting many errors. */}
    </div>
  );
}

export default App;
