"use strict";
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
/**
 * The function `areObjectsEqual` checks if two objects are equal by comparing their keys and values.
 * @param {any} obj1 - The first object to compare.
 * @param {any} obj2 - The `obj2` parameter is an object that you want to compare with `obj1` to check
 * if they are equal.
 * @returns a boolean value. It returns true if the two objects are equal, and false otherwise.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function areObjectsEqual(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    }
    if (obj1 == null || obj2 == null) {
        return false;
    }
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);
    if (obj1Keys.length !== obj2Keys.length) {
        return false;
    }
    for (const key of obj1Keys) {
        if (!obj2.hasOwnProperty(key)) {
            return false;
        }
        const value1 = obj1[key];
        const value2 = obj2[key];
        if (value1 !== value2) {
            return false;
        }
    }
    return true;
}
exports.default = areObjectsEqual;
//# sourceMappingURL=areObjectsEqual.js.map