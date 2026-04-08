import {inventory} from "../src/constants/inventory.js";
import {calculateTotalStock} from "./calculateTotalStock.js";
import {calculateSoldTvs} from "./calculateSoldTvs.js";

export function calculateRemainingStock() {
    return calculateTotalStock() - calculateSoldTvs();
}