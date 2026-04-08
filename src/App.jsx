import './App.css';
import {bestSellingTv, inventory} from "./constants/inventory.js";
import {calculateSoldProducts} from "../helpers/calculateSoldProducts.js";
import {calculateTotalStock} from "../helpers/calculateTotalStock.js";
import {calculateRemainingStock} from "../helpers/calculateRemainingStock.js";
import {formatProductName} from "../helpers/formatProductName.js";
import {formatPrice} from "../helpers/formatPrice.js";
import {formatSize} from "../helpers/formatSize.js";

function App() {

    console.log(calculateSoldProducts(inventory));
    console.log(calculateTotalStock(inventory));

    function handleClick(event) {
        console.log(event.target.textContent);
    }

    return (
        <>
            <h1>Begin hier met met maken van de applicatie!</h1>
            <p className="green-text">Aantal verkochte producten: {calculateSoldProducts(inventory)}</p>
            <p className="blue-text">Aantal ingekochte producten: {calculateTotalStock(inventory)}</p>
            <p className="red-text">Aantal te verkopen producten: {calculateRemainingStock(inventory)}</p>
            <img id="best-seller-img" src={bestSellingTv.sourceImg} alt="Best verkochte tv"/>
            <p>{formatProductName(bestSellingTv)}</p>
            <p>{formatPrice(bestSellingTv)}</p>
            <p>{formatSize(bestSellingTv)}</p>
            <p>
                <img className="icon" src="src/assets/check.png" alt="Aanwezig"/> wifi
                <img className="icon" src="src/assets/minus.png" alt="Afwezig"/> speech
                <img className="icon" src="src/assets/check.png" alt="Aanwezig"/> hdr
                <img className="icon" src="src/assets/check.png" alt="Aanwezig"/> bluetooth
                <img className="icon" src="src/assets/minus.png" alt="Afwezig"/> ambilight
            </p>
            <button className="button" type="button" onClick={handleClick}>Meest verkocht eerst</button>
            <button className="button" type="button" onClick={handleClick}>Goedkoopste eerst</button>
            <button className="button" type="button" onClick={handleClick}>Meest geschikt voor sport eerst</button>
        </>
    );
}

export default App
