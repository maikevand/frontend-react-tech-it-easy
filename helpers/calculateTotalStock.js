// Opdracht 1c: Hoeveel tv's heeft Tech It Easy in totaal ingekocht? Schrijf een helperfunctie die dit berekent. Log de uitkomst in de console.

export function calculateTotalStock(inventory) {
    let totalStock = 0;
    for (let i=0; i < inventory.length; i++) {
        totalStock += inventory[i].originalStock;
    }
    return totalStock;
}