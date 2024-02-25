"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The function counts the number of occurrences of a specific key in a JSON object or array.
 * @param {any} json - The `json` parameter is the JSON object or array that you want to search for the
 * specified key in.
 * @param {string} key - The `key` parameter is a string that represents the key you want to count in
 * the JSON object.
 * @returns the count of how many times the specified key appears in the given JSON object.
 */
function countKeyOccurrences(json, key) {
    let count = 0;
    if (typeof json === 'object' && !Array.isArray(json)) {
        const keys = Object.keys(json);
        if (keys.includes(key))
            count += 1;
        keys.forEach(k => {
            count += countKeyOccurrences(json[k], key);
        });
    }
    if (Array.isArray(json)) {
        json.forEach(item => {
            count += countKeyOccurrences(item, key);
        });
    }
    return count;
}
exports.default = countKeyOccurrences;
//# sourceMappingURL=countKeyOccurrences.js.map