// Opdracht 2b: Maak een helperfunctie die de prijs van één tv als parameter
// verwacht (zoals 379 of 159) teruggeeft in het format €379,- of €159,-.

export function formatPrice(price) {
    return `€${price.price},-`;
}