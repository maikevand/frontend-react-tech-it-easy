import {calculateTotalStock} from "./calculateTotalStock.js";
import {calculateSoldProducts} from "./calculateSoldProducts.js";

export function calculateRemainingStock(inventory) {
    return calculateTotalStock(inventory) - calculateSoldProducts(inventory);
}