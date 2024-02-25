"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The function removes the target string from the array if it exists, otherwise it adds the target
 * string to the array.
 * @param {string[]} arr - An array of strings.
 * @param {string} targetString - The targetString parameter is the string that you want to either
 * remove from the array or add to the array.
 * @returns an array of strings.
 */
function toggleStringInArray(arr, targetString) {
    const index = arr.indexOf(targetString);
    if (index !== -1) {
        arr.splice(index, 1);
    }
    else {
        arr.push(targetString);
    }
    return arr;
}
exports.default = toggleStringInArray;
//# sourceMappingURL=toggleStringInArray.js.map