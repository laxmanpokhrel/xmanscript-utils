"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-continue */
/* eslint-disable no-restricted-syntax */
/**
 * The function `groupArrayOfObjectsByValueOfAKey` takes an array of objects and a key, and groups the
 * objects based on the similarity of their values for that key.
 * @param {Record<string, any>[]} arr - An array of objects. Each object in the array has properties
 * with key-value pairs.
 * @param {string} key - The `key` parameter is a string that represents the key in each object of the
 * `arr` array that will be used to group the objects.
 * @returns The function `groupArrayOfObjectsByValueOfAKey` returns an array of arrays. Each inner array
 * contains objects from the input array `arr` that have the same value for the specified `key`.
 */
function groupArrayOfObjectsByValueOfAKey(arr, key) {
    const groupedArrays = {};
    for (const obj of arr) {
        const keyValue = obj[key];
        if (keyValue === undefined || keyValue === null) {
            continue;
        }
        if (!groupedArrays[keyValue]) {
            groupedArrays[keyValue] = [obj];
        }
        else {
            groupedArrays[keyValue].push(obj);
        }
    }
    return Object.values(groupedArrays);
}
exports.default = groupArrayOfObjectsByValueOfAKey;
//# sourceMappingURL=groupArrayOfObjectsByValueOfAKey.js.map