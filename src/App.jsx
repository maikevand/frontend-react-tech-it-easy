// App.jsx
// import showOutcomeInConsole from './constants/oefenbestand.js';

import './App.css';
import {bestSellingTv, inventory} from "./constants/inventory.js";
import {calculateSoldProducts} from "../helpers/calculateSoldProducts.js";
import {calculateTotalStock} from "../helpers/calculateTotalStock.js";
import {calculateRemainingStock} from "../helpers/calculateRemainingStock.js";
import {formatProductName} from "../helpers/formatProductName.js";
import {formatPrice} from "../helpers/formatPrice.js";
import {formatSize} from "../helpers/formatSize.js";
// Dit is een oude import n.a.v. opdracht 2a, ik wist niet of ik die moet laten staan om te laten zien hoe ik die stap genomen heb.
import {tvNames} from "../helpers/displayTvNames.js";
import {mostSoldFirst} from "../helpers/sortMostSoldFirst.js";
import {cheapestFirst} from "../helpers/sortCheapestFirst.js";
import {bestSportsFirst} from "../helpers/sortBestSportsFirst.js";

function App() {
    // showOutcomeInConsole();

    console.log(calculateSoldProducts(inventory));
    console.log(calculateTotalStock(inventory));

    // console.log(mostSoldFirst(inventory));

    function handleMostSoldClick() {
        console.log(mostSoldFirst(inventory));
    }

    function handleCheapestClick() {
        console.log(cheapestFirst(inventory));
    }

    function handleBestSportsClick() {
        console.log(bestSportsFirst(inventory));
    }

    return (
        <>
            <header>
                <h1>Tech it easy dashboard</h1>
            </header>
            <main>
                <section>
                    <h2>Verkoopoverzicht</h2>
                    <div className="statistics">
                        <div className="statistics-box" id="numbers-sold">
                            <p>Aantal verkochte producten</p>
                            <p>{calculateSoldProducts(inventory)}</p>
                        </div>

                        <div className="statistics-box" id="numbers-bought">
                            <p>Aantal ingekochte producten</p>
                            <p>{calculateTotalStock(inventory)}</p>
                        </div>
                        <div className="statistics-box" id="numbers-stock">
                            <p>Aantal te verkopen producten</p>
                            <p>{calculateRemainingStock(inventory)}</p>
                        </div>
                    </div>
                </section>
                <section>
                    <h2>Best verkochte tv</h2>
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
                </section>
                <section>
                    <h2>Alle tv's</h2>
                    <button type="button" onClick={handleMostSoldClick}>Meest verkocht eerst</button>
                    <button type="button" onClick={handleCheapestClick}>Goedkoopste eerst</button>
                    <button type="button" onClick={handleBestSportsClick}>Meest geschikt voor sport eerst</button>
                    {/*{tvNames(inventory).map((tvName) => {*/}
                    {/*    return <p key={tvName}>{tvName}</p>*/}
                    {/*}*/}
                    {/*)}*/}
                    {inventory.map((tv) => (
                        <div key={tv.type}>
                            <img className="tv-images" src={tv.sourceImg} alt={tv.name}/>
                            <p>{formatProductName(tv)}</p>
                            <p>{formatPrice(tv)}</p>
                            <p>{formatSize(tv)}</p>
                            <p>
                                {tv.options.map((option) => (
                                    <span key={option.name}>
                                {option.applicable ? (
                                    <img className="icon" src="src/assets/check.png" alt="Aanwezig"/>
                                ) : (
                                    <img className="icon" src="src/assets/minus.png" alt="Afwezig"/>
                                )}
                                        {option.name}
                                </span>
                                ))}
                            </p>
                        </div>
                    ))}
                </section>
            </main>
            <footer>
                <p>©️2026 Tech It Easy</p>
            </footer>
        </>
    );
}

export default App
