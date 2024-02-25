"use strict";
/**
 * The function adds a "checked" field to each object in an array based on whether a corresponding
 * string value is included in another array.
 * @param {T[]} objects - An array of objects of type T.
 * @param {string[]} strings - An array of strings that will be used to check against the values of the
 * chooseKey property in each object.
 * @param chooseKey - The `chooseKey` parameter is the key of the property in the objects that you want
 * to compare with the strings. It is of type `keyof T`, which means it can be any valid key of the
 * objects in the `objects` array.
 * @returns The function `markCheckedByStringMatch` returns an array of objects of type `T` with an
 * additional `checked` field.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function markCheckedByStringMatch(objects, strings, chooseKey) {
    const x = objects.map(object => {
        const chooseValue = object[chooseKey].toString();
        const checked = strings.includes(chooseValue);
        return Object.assign(Object.assign({}, object), { checked });
    });
    return x;
}
exports.default = markCheckedByStringMatch;
//# sourceMappingURL=markCheckedByStringMatch.js.map