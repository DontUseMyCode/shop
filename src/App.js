import "./App.css";
import SearchProduct from "./SerachProduct";
import MagicShop from "./MagicShop";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <MagicShop />
      <SearchProduct />
    </div>
  );
}

export default App;
