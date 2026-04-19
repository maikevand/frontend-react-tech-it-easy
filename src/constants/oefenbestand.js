// oefenbestand.js
import { inventory } from './inventory.js';

// Opdracht 1a. Alle tv-namen.
const tvNames = inventory.map((tv) => {
    return tv.name;
});

// Opdracht 1b. Alle informatie van tv's die uitverkocht zijn.
const soldOutTvs = inventory.filter((soldOutTv) => {
return (soldOutTv.originalStock - soldOutTv.sold) === 0;
});

// Opdracht 1c: Gebruik een array-methode om de informatie van het tv-type 'NH3216SMART' op te halen.
const NikkeiSmartTvs = inventory.find((NikkeiSmartTv) => {
    return NikkeiSmartTv.type === "NH3216SMART";
});

// Opdracht 1d: merk en tv namen van tv's geschikt om sport te kijken (100Hz of hoger).
// Doe dit in het format { name: 'Toshiba HD TV', suitable: false }.

const sportsTvs = inventory.map((sportsTv) => {
return {
    name: sportsTv.brand + " " + sportsTv.name,
    suitable: sportsTv.refreshRate >= 100
}
});

// Opdracht 1e (uitdaging): Gebruik array-methoden om alle informatie te verzamelen van de
// tv's die beschikbaar zijn in schermgroottes van 65 inch en groter.

const bigTvs = inventory.filter((bigTv) => {
    return bigTv.availableSizes.some(function (size) {
        return size >= 65;
    });
});

// Opdracht 1f: alle info van tv's met ambilight
const ambilightTvs = inventory.filter((ambilightTv) => {
    return ambilightTv.options.some(function (option) {
        return option.name === "ambiLight" && option.applicable === true;
    });
});

function showOutcomeInConsole() {
    console.log(tvNames);
    console.log(soldOutTvs);
    console.log(NikkeiSmartTvs);
    console.log(sportsTvs);
    console.log(bigTvs);
    console.log(ambilightTvs);

}

export default showOutcomeInConsole;