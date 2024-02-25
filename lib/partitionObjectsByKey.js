"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-restricted-syntax */
/**
 * The function `partitionObjectsByKey` takes an array of objects and a key, and returns two arrays -
 * one containing objects that have the specified key, and another containing objects that do not have
 * the specified key.
 * @param {Record<string, any>[]} arr - An array of objects. Each object in the array should have a
 * key-value pair where the key is a string.
 * @param {string} key - The `key` parameter is a string that represents the key by which the objects
 * in the array will be partitioned.
 * @returns The function `partitionObjectsByKey` returns an array containing two elements. The first
 * element is an array of objects that have the specified key, and the second element is an array of
 * objects that do not have the specified key.
 */
function partitionObjectsByKey(arr, key) {
    if (!Array.isArray(arr) || typeof key !== 'string') {
        console.error('Invalid input. Expected an array of objects and a string key.');
        return [[], []];
    }
    const withkey = [];
    const withoutKey = [];
    for (const element of arr) {
        if (element && typeof element === 'object') {
            const elementKeys = Object.keys(element);
            if (elementKeys.includes(key))
                withkey.push(element);
            else
                withoutKey.push(element);
        }
        else {
            console.error('Invalid element encountered: ', element);
        }
    }
    return [withkey, withoutKey];
}
exports.default = partitionObjectsByKey;
//# sourceMappingURL=partitionObjectsByKey.js.map