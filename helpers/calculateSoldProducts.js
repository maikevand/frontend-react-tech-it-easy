// Opdracht 1a: Hoeveel tv's zijn er al verkocht? Schrijf een helperfunctie
// die dit berekent. Log de uitkomst in de console.

export function calculateSoldProducts(inventory) {
    let soldProducts = 0;
    for (let i=0; i < inventory.length; i++) {
        soldProducts += inventory[i].sold;
    }
    return soldProducts;
}



