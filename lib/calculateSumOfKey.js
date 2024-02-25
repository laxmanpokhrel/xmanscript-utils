"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This TypeScript function calculates the sum of a specified key in an array of objects.
 * @param {Record<string, any>[]} data - An array of objects where each object has one or more
 * key-value pairs.
 * @param {string} key - The `key` parameter is a string representing the key of the property in each
 * object of the `data` array that we want to sum up.
 * @returns the sum of the values of a given key in an array of objects. If the array is empty, it
 * returns 0.
 */
function calculateSumOfKey(data, key) {
    if (!data.length)
        return 0;
    return data.reduce((total, item) => total + (item[key] || 0), 0);
}
exports.default = calculateSumOfKey;
//# sourceMappingURL=calculateSumOfKey.js.map