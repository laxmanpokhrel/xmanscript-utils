"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The function divides a given percentage into equal parts and distributes any remaining percentage
 * across the parts.
 * @param {Record<string, any>[]} array - The `array` parameter is an array of objects, where each
 * object represents a part that needs to be divided into equal parts. Each object can have any
 * properties, but in this case, we are only interested in the `percentage` property.
 * @returns an array of objects, where each object represents a part and contains a "percentage"
 * property.
 */
function distributePercentageEquallyWithRemainder(array) {
    const equalPartPercentage = Math.floor(100 / array.length);
    const remainingPercentage = 100 % array.length;
    const parts = [];
    // Create equal parts with the calculated percentage
    for (let i = 0; i < array.length; i += 1) {
        const part = {
            percentage: +equalPartPercentage,
        };
        parts.push(part);
    }
    // Distribute the remaining percentage across the parts
    for (let i = 0; i < remainingPercentage; i += 1) {
        parts[i].percentage += 1;
    }
    return parts;
}
exports.default = distributePercentageEquallyWithRemainder;
//# sourceMappingURL=distributePercentageEquallyWithRemainder.js.map