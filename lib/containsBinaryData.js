"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
/**
 * The function `containsBinaryData` checks if an object contains any binary data (Blob, File, or
 * ArrayBuffer) recursively.
 * @param obj - The `obj` parameter is an object of type `Record<string, any>`, which means it is a
 * generic object with string keys and any values. This function is used to check if the object
 * contains any binary data, such as `Blob`, `File`, or `ArrayBuffer` instances.
 * @returns The function `containsBinaryData` returns a boolean value.
 */
function containsBinaryData(obj) {
    function containsBinaryDataRecursive(object) {
        for (const key in object) {
            if (object.hasOwnProperty(key)) {
                const value = object[key];
                if (value instanceof Blob || value instanceof File || value instanceof ArrayBuffer) {
                    return true;
                }
                if (typeof value === 'object' && containsBinaryDataRecursive(value)) {
                    return true;
                }
            }
        }
        return false;
    }
    return containsBinaryDataRecursive(obj);
}
exports.default = containsBinaryData;
//# sourceMappingURL=containsBinaryData.js.map