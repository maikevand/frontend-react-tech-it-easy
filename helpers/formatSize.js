// Opdracht 2c: Maak een helperfunctie die een string genereert voor alle
// beschikbare schermgroottes van één tv. De functie geeft dit terug in het format:
// [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc.

export function formatSize(product) {
    const size = [];

    for (let i=0; i < product.availableSizes.length; i++) {
        size.push(
        `${product.availableSizes[i]} inch (${Math.round(product.availableSizes[i] * 2.54)} cm)`);
    }
    return size.join(" | ");
}