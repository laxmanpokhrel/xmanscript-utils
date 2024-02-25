"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
/**
 * The function converts an input object with nested keys in the format of "name[index].nestedKey" into
 * an output object with nested arrays and objects.
 * @param input - The input parameter is a JavaScript object with string keys and any values.
 * @returns an object with the converted input. The input is an object with string keys and any values.
 * The function converts any keys that match the pattern of "name[index].nestedKey" into nested objects
 * within an array. The function returns the converted object.
 */
function convertNestedKeysToObject(input) {
    const output = {};
    for (const key in input) {
        if (input.hasOwnProperty(key)) {
            const match = key.match(/^(.*?)\[(\d+)\]\.(.*)$/);
            if (match) {
                const name = match[1];
                const index = match[2];
                const nestedKey = match[3];
                if (!output[name]) {
                    output[name] = [];
                }
                if (!output[name][index]) {
                    output[name][index] = {};
                }
                output[name][index][nestedKey] = input[key];
            }
            else {
                output[key] = input[key];
            }
        }
    }
    return output;
}
exports.default = convertNestedKeysToObject;
//# sourceMappingURL=convertNestedKeysToObject.js.map