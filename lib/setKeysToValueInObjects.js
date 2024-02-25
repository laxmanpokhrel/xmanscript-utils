"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The function `setKeysToValueInObjects` takes an array of objects and an array of keys, and returns a new
 * array of objects where the specified keys are assigned the `value`
 * @param {Record<string, any>[]} arr - An array of objects, where each object represents a record with
 * key-value pairs.
 * @param {string[]} keys - An array of strings representing the keys that need to be assigned the
 * `value` in each object in the array.
 * @param {any} value - A value that need to be assigned in each object in the array.
 * @returns an array of objects where the specified keys are assigned the `value`.
 */
function setKeysToValueInObjects(arr, keys, value) {
    if (!keys.length)
        return arr;
    return arr.map(obj => {
        const newObj = Object.assign({}, obj);
        keys.forEach(key => {
            newObj[key] = value;
        });
        return newObj;
    });
}
exports.default = setKeysToValueInObjects;
//# sourceMappingURL=setKeysToValueInObjects.js.map