// Opdracht 1a: Hoeveel tv's zijn er al verkocht? Schrijf een helperfunctie
// die dit berekent. Log de uitkomst in de console.

import {inventory} from "../src/constants/inventory.js";
export function calculateSoldTvs() {
    let soldTvs = 0;
    for (let i=0; i < inventory.length; i++) {
        soldTvs += inventory[i].sold;
    }
    return soldTvs;
}

console.log(calculateSoldTvs());

