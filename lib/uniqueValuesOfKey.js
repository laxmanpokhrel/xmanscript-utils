"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
/**
 * Extracts unique values for a specified key from an array of objects.
 * @param {Record<string, any>[]} data - An array of objects containing various key-value pairs.
 * @param {string} key - The key to extract unique values from.
 * @returns {string[]} An array of unique string values from the specified key.
 */
function uniqueValuesOfKey(data, key) {
    if (!Array.isArray(data) || typeof key !== 'string') {
        console.error('Invalid input: data should be an array of objects, and key should be a string.');
        return [];
    }
    const uniqueValues = new Set();
    for (const item of data) {
        if (item.hasOwnProperty(key) && typeof item[key] === 'string') {
            uniqueValues.add(item[key]);
        }
    }
    return Array.from(uniqueValues);
}
exports.default = uniqueValuesOfKey;
//# sourceMappingURL=uniqueValuesOfKey.js.map