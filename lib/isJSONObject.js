"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The function checks if a given string is a valid JSON object.
 * @param {string} value - The parameter `value` is a string that represents a JSON object.
 * @returns The function isJSONObject returns a boolean value. It returns true if the input value is a
 * valid JSON object, and false otherwise.
 */
function isJSONObject(value) {
    if (typeof value !== 'string') {
        return false;
    }
    try {
        const parsedValue = JSON.parse(value);
        return typeof parsedValue === 'object';
    }
    catch (error) {
        return false;
    }
}
exports.default = isJSONObject;
//# sourceMappingURL=isJSONObject.js.map