// Opdracht 1c: Hoeveel tv's heeft Tech It Easy in totaal ingekocht? Schrijf een helperfunctie die dit berekent. Log de uitkomst in de console.

import {inventory} from "../src/constants/inventory.js";
export function calculateTotalStock() {
    let stockTvs = 0;
    for (let i=0; i < inventory.length; i++) {
        stockTvs += inventory[i].originalStock;
    }
    return stockTvs;
}

console.log(calculateTotalStock());