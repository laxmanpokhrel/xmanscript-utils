"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const areObjectsEqual_1 = __importDefault(require("./areObjectsEqual"));
/**
 * The function removes the target object from the array if it exists, otherwise it adds it to the
 * array.
 * @param {T[]} arr - An array of objects of type T.
 * @param {T} targetObject - The `targetObject` parameter is the object that you want to either remove
 * from the array if it exists, or add to the array if it doesn't exist.
 * @returns the updated array after either removing or adding the target object.
 */
function toggleObjectInArray(arr, targetObject) {
    const index = arr.findIndex(obj => (0, areObjectsEqual_1.default)(obj, targetObject));
    if (index !== -1) {
        arr.splice(index, 1);
    }
    else {
        arr.push(targetObject);
    }
    return arr;
}
exports.default = toggleObjectInArray;
//# sourceMappingURL=toggleObjectInArray.js.map