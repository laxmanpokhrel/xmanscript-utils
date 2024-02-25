"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Converts a number to a comma-separated string representation, rounded to the nearest whole number.
 * @param {number} value - The number to be converted.
 * @returns {string} A comma-separated string representation of the rounded number.
 */
function formatNumberToCommaString(value) {
    if (typeof value !== 'number') {
        console.error('Invalid input: value should be a number.');
        return '';
    }
    return Math.round(value).toLocaleString('en-US');
}
exports.default = formatNumberToCommaString;
//# sourceMappingURL=formatNumberToCommaString.js.map