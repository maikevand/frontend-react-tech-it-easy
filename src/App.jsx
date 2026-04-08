import './App.css';
import '../helpers/calculateSoldTvs.js'
import {calculateSoldTvs} from "../helpers/calculateSoldTvs.js";
import {calculateTotalStock} from "../helpers/calculateTotalStock.js";
import {calculateRemainingStock} from "../helpers/calculateRemainingStock.js";

function App() {
  const soldTvs = calculateSoldTvs();
  const totalStock = calculateTotalStock();
  const remainingStock = calculateRemainingStock();
  return (
      <>
    <h1>Begin hier met met maken van de applicatie!</h1>
      <p className="green-text">Aantal verkochte producten: {soldTvs}</p>
        <p className="blue-text">Aantal ingekochte producten: {totalStock}</p>
        <p className="red-text">Aantal te verkopen producten: {remainingStock}</p>
      </>
  );
}

export default App
