import './App.css';
import {inventory} from "./constants/inventory.js";
import {calculateSoldProducts} from "../helpers/calculateSoldProducts.js";
import {calculateTotalStock} from "../helpers/calculateTotalStock.js";
import {calculateRemainingStock} from "../helpers/calculateRemainingStock.js";

function App() {

  console.log(calculateSoldProducts(inventory));
  console.log(calculateTotalStock(inventory));

  return (
      <>
    <h1>Begin hier met met maken van de applicatie!</h1>
      <p className="green-text">Aantal verkochte producten: {calculateSoldProducts(inventory)}</p>
        <p className="blue-text">Aantal ingekochte producten: {calculateTotalStock(inventory)}</p>
        <p className="red-text">Aantal te verkopen producten: {calculateRemainingStock(inventory)}</p>
      </>
  );
}

export default App
