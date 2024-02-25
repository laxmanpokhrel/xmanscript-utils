"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-restricted-syntax */
const validateObjectsForKey_1 = __importDefault(require("./validateObjectsForKey"));
/**
 * The function calculates and injects the percentage value based on the maximum value of a specified
 * key in an array of objects.
 * @param {Record<string, any>[]} arr - An array of objects. Each object represents a data point and
 * contains various properties.
 * @param {string} key - The `key` parameter is a string that represents the key in each object of the
 * `arr` array that contains the value to be used for calculating the percentage.
 * @returns the modified array `arr` with the added `percentage` property in each object.
 */
function calculateAndInjectPercentageByMaxValue(arr, key) {
    try {
        (0, validateObjectsForKey_1.default)(arr, 'value');
    }
    catch (error) {
        console.error(error.message);
        return arr;
    }
    const maxValue = Math.max(...arr.map(obj => obj[key]));
    for (const obj of arr) {
        obj.percentage = parseFloat(((obj[key] / maxValue) * 100).toFixed(2));
    }
    return arr;
}
exports.default = calculateAndInjectPercentageByMaxValue;
//# sourceMappingURL=calculateAndInjectPercentageByMaxValue.js.map