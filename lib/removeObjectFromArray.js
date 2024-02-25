"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The function removes a specified object from an array of objects.
 * @param {Record<string, any>[]} objects - An array of objects.
 * @param object - The `object` parameter is the object that you want to remove from the `objects`
 * array.
 * @returns the updated array after removing the specified object.
 */
function removeObjectFromArray(objects, object) {
    const index = objects.findIndex(item => JSON.stringify(item) === JSON.stringify(object));
    if (index < 0)
        return objects;
    const result = [...objects.slice(0, index), ...objects.slice(index + 1)];
    return result;
}
exports.default = removeObjectFromArray;
//# sourceMappingURL=removeObjectFromArray.js.map