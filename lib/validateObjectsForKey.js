"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
/**
 * The function validates an array of objects to ensure that each object has a valid numeric property
 * with a specified key.
 * @param {Record<string, any>[]} arr - An array of objects. Each object in the array should have a
 * property with the name specified by the 'key' parameter.
 * @param {string} key - The `key` parameter is a string that represents the property key that we want
 * to validate in each object of the `arr` array.
 * @returns The function `validateObjectsForKey` returns either an `Error` object or `true`.
 */
function validateObjectsForKey(arr, key) {
    for (const obj of arr) {
        if (!obj.hasOwnProperty(key) || typeof obj[key] !== 'number' || Number.isNaN(obj[key])) {
            console.error(`Invalid object encountered. Object:`, obj);
            throw new Error(`Object does not have a valid numeric "${key}" property.`);
        }
    }
    return true;
}
exports.default = validateObjectsForKey;
//# sourceMappingURL=validateObjectsForKey.js.map