"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-restricted-syntax */
const validateObjectsForKey_1 = __importDefault(require("./validateObjectsForKey"));
/**
 * The function calculates the percentage of a specific key's value based on sum of values in that key in each object of an array and
 * injects it as a new property called "percentage".
 * @param {Record<string, any>[]} arr - An array of objects. Each object represents a record and
 * contains various key-value pairs.
 * @param {string} key - The `key` parameter is a string that represents the key in each object of the
 * `arr` array that contains the value to be used for calculation.
 * @returns the modified array with the added "percentage" property for each object.
 */
function calculateAndInjectPercentageBySum(arr, key) {
    try {
        (0, validateObjectsForKey_1.default)(arr, 'value');
    }
    catch (error) {
        console.error(error.message);
        return arr;
    }
    const sumOfValuesOfKey = arr.reduce((total, item) => total + (item[key] || 0), 0);
    for (const obj of arr) {
        obj.percentage = parseFloat(((obj[key] / sumOfValuesOfKey) * 100).toFixed(2));
    }
    return arr;
}
exports.default = calculateAndInjectPercentageBySum;
//# sourceMappingURL=calculateAndInjectPercentageBySum.js.map