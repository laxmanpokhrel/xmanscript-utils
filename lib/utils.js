"use strict";
/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-console */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-continue */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDifferenceObject = exports.strictIntersectObjects = exports.getMinMax = exports.formatNumberToCommaString = exports.uniqueValuesOfKey = exports.distributePercentageEquall = exports.countKeyOccurrences = exports.groupArrayOfObjectsByValueOfAKey = exports.parseToBoolean = exports.removeObjectFromArray = exports.getFileExtension = exports.intersectObjects = exports.splitArrayIntoChunks = exports.markCheckedByStringMatch = exports.distributePercentageEquallyWithRemainder = exports.convertNestedKeysToObject = exports.scrollToComponent = exports.setValueOfKeyForMatchingValuesOfAKey = exports.calculateSumOfKey = exports.calculateAndInjectPercentageBySum = exports.calculateAndInjectPercentageByMaxValue = exports.toggleObjectInArray = exports.toggleStringInArray = exports.setKeysToValueInObjects = exports.omitKey = exports.abbreviateCurrencyValue = exports.areObjectsEqual = exports.objectToFormDataWithFiles = exports.isJSONObject = exports.containsBinaryData = exports.partitionObjectsByKey = void 0;
/**
 * The function `partitionObjectsByKey` takes an array of objects and a key, and returns two arrays -
 * one containing objects that have the specified key, and another containing objects that do not have
 * the specified key.
 * @param {Record<string, any>[]} arr - An array of objects. Each object in the array should have a
 * key-value pair where the key is a string.
 * @param {string} key - The `key` parameter is a string that represents the key by which the objects
 * in the array will be partitioned.
 * @returns The function `partitionObjectsByKey` returns an array containing two elements. The first
 * element is an array of objects that have the specified key, and the second element is an array of
 * objects that do not have the specified key.
 */
function partitionObjectsByKey(arr, key) {
    if (!Array.isArray(arr) || typeof key !== 'string') {
        console.error('Invalid input. Expected an array of objects and a string key.');
        return [[], []];
    }
    const withkey = [];
    const withoutKey = [];
    for (const element of arr) {
        if (element && typeof element === 'object') {
            const elementKeys = Object.keys(element);
            if (elementKeys.includes(key))
                withkey.push(element);
            else
                withoutKey.push(element);
        }
        else {
            console.error('Invalid element encountered: ', element);
        }
    }
    return [withkey, withoutKey];
}
exports.partitionObjectsByKey = partitionObjectsByKey;
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
exports.containsBinaryData = containsBinaryData;
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
exports.isJSONObject = isJSONObject;
/**
 * The function `objectToFormDataWithFiles` converts a JSON object into a FormData object, handling file uploads
 * and nested objects.
 * @param obj - The `obj` parameter is an object that contains key-value pairs. The keys represent the
 * names of the form fields, and the values represent the corresponding values for those fields. The
 * values can be of any type, including strings, numbers, booleans, arrays, or objects. Additionally,
 * the `
 * @returns a FormData object.
 */
function objectToFormDataWithFiles(obj) {
    const formData = new FormData();
    const { file } = obj, rest = __rest(obj, ["file"]);
    file.forEach((item) => {
        formData.append('file', item);
    });
    Object.keys(rest).forEach(key => {
        const value = rest[key];
        if (Array.isArray(value) || isJSONObject(value))
            formData.append(key, JSON.stringify(value));
        else
            formData.append(key, value);
    });
    return formData;
}
exports.objectToFormDataWithFiles = objectToFormDataWithFiles;
/**
 * The function `areObjectsEqual` checks if two objects are equal by comparing their keys and values.
 * @param {any} obj1 - The first object to compare.
 * @param {any} obj2 - The `obj2` parameter is an object that you want to compare with `obj1` to check
 * if they are equal.
 * @returns a boolean value. It returns true if the two objects are equal, and false otherwise.
 */
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
exports.areObjectsEqual = areObjectsEqual;
/**
 * The function converts a number into a currency system by abbreviating it with B for billions, M for
 * millions, and K for thousands.
 * @param {number} labelValue - The `labelValue` parameter is a number that represents a value in a
 * certain currency system.
 * @returns a string or a number.
 */
function abbreviateCurrencyValue(labelValue) {
    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e9
        ? `${(Math.abs(Number(labelValue)) / 1.0e9).toFixed(1)} B`
        : // Six Zeroes for Millions
            Math.abs(Number(labelValue)) >= 1.0e6
                ? `${(Math.abs(Number(labelValue)) / 1.0e6).toFixed(1)} M`
                : // Three Zeroes for Thousands
                    Math.abs(Number(labelValue)) >= 1.0e3
                        ? `${(Math.abs(Number(labelValue)) / 1.0e3).toFixed(1)} K`
                        : Math.abs(Number(labelValue));
}
exports.abbreviateCurrencyValue = abbreviateCurrencyValue;
/**
 * The `omitKey` function removes a specified key from an object and returns a new object
 * without that key.
 * @param {T} obj - The `obj` parameter is the object from which you want to remove a key. It can be of
 * any type `T`.
 * @param {K} key - The `key` parameter is the key of the property that you want to remove from the
 * object. It should be a valid key of the object's type `T`.
 * @returns an object of type `Omit<T, K>`, which is the original object `obj` with the specified `key`
 * removed.
 */
function omitKey(obj, key) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _a = obj, _b = key, omitted = _a[_b], rest = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
    return rest;
}
exports.omitKey = omitKey;
/**
 * The function `setKeysToValueInObjects` takes an array of objects and an array of keys, and returns a new
 * array of objects where the specified keys are assigned the `value`
 * @param {Record<string, any>[]} arr - An array of objects, where each object represents a record with
 * key-value pairs.
 * @param {string[]} keys - An array of strings representing the keys that need to be assigned the
 * `value` in each object in the array.
 * @param {any} value - A value that need to be assigned in each object in the array.
 * @returns an array of objects where the specified keys are assigned the `value`.
 */
function setKeysToValueInObjects(arr, keys, value) {
    if (!keys.length)
        return arr;
    return arr.map(obj => {
        const newObj = Object.assign({}, obj);
        keys.forEach(key => {
            newObj[key] = value;
        });
        return newObj;
    });
}
exports.setKeysToValueInObjects = setKeysToValueInObjects;
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
exports.toggleStringInArray = toggleStringInArray;
/**
 * The function removes the target object from the array if it exists, otherwise it adds it to the
 * array.
 * @param {T[]} arr - An array of objects of type T.
 * @param {T} targetObject - The `targetObject` parameter is the object that you want to either remove
 * from the array if it exists, or add to the array if it doesn't exist.
 * @returns the updated array after either removing or adding the target object.
 */
function toggleObjectInArray(arr, targetObject) {
    const index = arr.findIndex(obj => areObjectsEqual(obj, targetObject));
    if (index !== -1) {
        arr.splice(index, 1);
    }
    else {
        arr.push(targetObject);
    }
    return arr;
}
exports.toggleObjectInArray = toggleObjectInArray;
/**
 * The function validates an array of objects to ensure that each object has a valid numeric property
 * with a specified key.
 * @param {Record<string, any>[]} arr - An array of objects. Each object in the array should have a
 * property with the name specified by the 'key' parameter.
 * @param {string} key - The `key` parameter is a string that represents the property key that we want
 * to validate in each object of the `arr` array.
 * @returns The function `validateObjectsForKey` returns either an `Error` object or `true`.
 */
function validateObjectsForKey(arr, key) {
    for (const obj of arr) {
        if (!obj.hasOwnProperty(key) || typeof obj[key] !== 'number' || isNaN(obj[key])) {
            console.error(`Invalid object encountered. Object:`, obj);
            throw new Error(`Object does not have a valid numeric "${key}" property.`);
        }
    }
    return true;
}
/**
 * The function calculates and injects the percentage value based on the maximum value of a specified
 * key in an array of objects.
 * @param {Record<string, any>[]} arr - An array of objects. Each object represents a data point and
 * contains various properties.
 * @param {string} key - The `key` parameter is a string that represents the key in each object of the
 * `arr` array that contains the value to be used for calculating the percentage.
 * @returns the modified array `arr` with the added `percentage` property in each object.
 */
function calculateAndInjectPercentageByMaxValue(arr, key) {
    try {
        validateObjectsForKey(arr, 'value');
    }
    catch (error) {
        console.error(error.message);
        return arr;
    }
    const maxValue = Math.max(...arr.map(obj => obj[key]));
    for (const obj of arr) {
        obj.percentage = parseFloat(((obj[key] / maxValue) * 100).toFixed(2));
    }
    return arr;
}
exports.calculateAndInjectPercentageByMaxValue = calculateAndInjectPercentageByMaxValue;
/**
 * The function calculates the percentage of a specific key's value based on sum of values in that key in each object of an array and
 * injects it as a new property called "percentage".
 * @param {Record<string, any>[]} arr - An array of objects. Each object represents a record and
 * contains various key-value pairs.
 * @param {string} key - The `key` parameter is a string that represents the key in each object of the
 * `arr` array that contains the value to be used for calculation.
 * @returns the modified array with the added "percentage" property for each object.
 */
function calculateAndInjectPercentageBySum(arr, key) {
    try {
        validateObjectsForKey(arr, 'value');
    }
    catch (error) {
        console.error(error.message);
        return arr;
    }
    const sumOfValuesOfKey = arr.reduce((total, item) => total + (item[key] || 0), 0);
    for (const obj of arr) {
        obj.percentage = parseFloat(((obj[key] / sumOfValuesOfKey) * 100).toFixed(2));
    }
    return arr;
}
exports.calculateAndInjectPercentageBySum = calculateAndInjectPercentageBySum;
/**
 * This TypeScript function calculates the sum of a specified key in an array of objects.
 * @param {Record<string, any>[]} data - An array of objects where each object has one or more
 * key-value pairs.
 * @param {string} key - The `key` parameter is a string representing the key of the property in each
 * object of the `data` array that we want to sum up.
 * @returns the sum of the values of a given key in an array of objects. If the array is empty, it
 * returns 0.
 */
function calculateSumOfKey(data, key) {
    if (!data.length)
        return 0;
    return data.reduce((total, item) => total + (item[key] || 0), 0);
}
exports.calculateSumOfKey = calculateSumOfKey;
/**
 * This TypeScript function changes the 'value' property of objects in an array if their specified key-value pair
 * matches the provided values. The 'value' property of matching objects will be set to zero.
 * @param {Record<string, any>[]} arr - An array of objects where each object has key-value pairs.
 * @param {string} key - The key parameter is a string that represents the key or property name of
 * the object in the array that we want to check for a specific value.
 * @param {any[]} values - An array of values to be matched against the value of the specified key
 * in each object. Objects with matching key-value pairs will have their 'value' property set to zero.
 * @param {string} updateKey - A key that need to be updated in each object that matches the criteria in the array.
 * @param {any} value - A value that need to be assigned in each object in the array.
 * @returns the modified array where the 'value' property of matching objects is set to zero.
 */
function setValueOfKeyForMatchingValuesOfAKey(arr, key, values, updateKey, value) {
    return arr.map(item => {
        if (values.includes(item[key])) {
            return Object.assign(Object.assign({}, item), { [updateKey]: value });
        }
        return item;
    });
}
exports.setValueOfKeyForMatchingValuesOfAKey = setValueOfKeyForMatchingValuesOfAKey;
/**
 * The scrollToComponent function scrolls to a specified component on the page and optionally focuses
 * on it after scrolling.
 * @param {scrollToComponentProps}  - - `componentId`: The id of the component to scroll to.
 *  'align': The alignment of the component after scrolling. It can be one of the following values:
 * 'start', 'center', or 'end'. The default value is 'center'.
 * 'delay': The delay in milliseconds before scrolling to the component.
 */
function scrollToComponent({ componentId, focusAfterScroll = false, scrollDelay, focusDelay, align = 'center', }) {
    // eslint-disable-next-line no-undef
    const element = document.getElementById(componentId);
    if (element) {
        // scroll after delay
        if (scrollDelay) {
            setTimeout(() => {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: align,
                });
            }, scrollDelay);
        }
        // scroll without delay
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        });
        // focus to element
        if (focusAfterScroll) {
            // focus after delay
            if (focusDelay)
                setTimeout(() => {
                    element.focus();
                }, focusDelay || 300);
            // focus without delay
            else
                element.focus();
        }
    }
}
exports.scrollToComponent = scrollToComponent;
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
exports.convertNestedKeysToObject = convertNestedKeysToObject;
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
exports.distributePercentageEquallyWithRemainder = distributePercentageEquallyWithRemainder;
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
function markCheckedByStringMatch(objects, strings, chooseKey) {
    const x = objects.map(object => {
        const chooseValue = object[chooseKey].toString();
        const checked = strings.includes(chooseValue);
        return Object.assign(Object.assign({}, object), { checked });
    });
    return x;
}
exports.markCheckedByStringMatch = markCheckedByStringMatch;
/**
 * The function splits an array into multiple arrays of a specified size.
 * @param {Record<string, any>[]} array - An array of objects, where each object has string keys and
 * any values.
 * @param {number} size - The `size` parameter represents the desired size of each subarray. It
 * determines how many elements should be included in each subarray when splitting the original array.
 * @returns an array of arrays. Each inner array contains a subset of the original array, with each
 * subset having a maximum size specified by the "size" parameter.
 */
function splitArrayIntoChunks(array, size) {
    return array.reduce((acc, current) => {
        if (acc.length === 0 || acc[acc.length - 1].length === size) {
            acc.push([current]);
        }
        else {
            acc[acc.length - 1].push(current);
        }
        return acc;
    }, []);
}
exports.splitArrayIntoChunks = splitArrayIntoChunks;
/**
 * The intersectObjects function takes two objects as input and returns a new object that contains
 * only the properties that exist in both input objects.
 * @param obj1 - An object of type `Record<string, any>`, which means it can have any number of
 * properties of any type.
 * @param obj2 - The `obj2` parameter is a record object that contains key-value pairs.
 * @returns The function `intersectObjects` returns a new object that contains the intersection of
 * properties between `obj1` and `obj2`.
 */
function intersectObjects(obj1, obj2) {
    const obj2Keys = Object.keys(obj2);
    if (!obj2Keys.length)
        return {};
    const intersectedObj = obj2Keys.reduce((acc, item) => {
        if (obj1[item])
            acc[item] = obj2[item];
        return acc;
    }, {});
    return intersectedObj;
}
exports.intersectObjects = intersectObjects;
/**
 * The function `getFileExtension` takes a URL as input and returns the file extension of the URL, or
 * an empty string if no extension is found.
 * @param {string | undefined} url - The `url` parameter is a string that represents the URL of a file.
 * @returns the file extension of a given URL as a lowercase string. If the URL is undefined or empty,
 * an empty string is returned. If no file extension is found in the URL, null is returned.
 */
function getFileExtension(url) {
    if (!url)
        return '';
    const lastDotIndex = url.lastIndexOf('.');
    if (lastDotIndex === -1) {
        return null; // No file extension found
    }
    const extension = url.slice(lastDotIndex + 1);
    return extension.toLowerCase();
}
exports.getFileExtension = getFileExtension;
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
exports.removeObjectFromArray = removeObjectFromArray;
/**
 * The function `parseToBoolean` takes a string as input and returns a boolean value if the string is
 * either 'true' or 'false', otherwise it logs an error message and returns undefined.
 * @param {string} val - The `val` parameter is a string that represents a boolean value.
 * @returns The function `parseToBoolean` returns a boolean value if the input string can be parsed to
 * either `true` or `false`. If the input string is not equal to either `true` or `false`, it logs an
 * error message to the console and returns `undefined`.
 */
function parseToBoolean(val) {
    if (val === 'true')
        return true;
    if (val === 'false')
        return false;
    console.error('String cannot be parsed to boolean.', val);
    return undefined;
}
exports.parseToBoolean = parseToBoolean;
/**
 * The function `groupArrayOfObjectsByValueOfAKey` takes an array of objects and a key, and groups the
 * objects based on the similarity of their values for that key.
 * @param {Record<string, any>[]} arr - An array of objects. Each object in the array has properties
 * with key-value pairs.
 * @param {string} key - The `key` parameter is a string that represents the key in each object of the
 * `arr` array that will be used to group the objects.
 * @returns The function `groupArrayOfObjectsByValueOfAKey` returns an array of arrays. Each inner array
 * contains objects from the input array `arr` that have the same value for the specified `key`.
 */
function groupArrayOfObjectsByValueOfAKey(arr, key) {
    const groupedArrays = {};
    for (const obj of arr) {
        const keyValue = obj[key];
        if (keyValue === undefined || keyValue === null) {
            continue;
        }
        if (!groupedArrays[keyValue]) {
            groupedArrays[keyValue] = [obj];
        }
        else {
            groupedArrays[keyValue].push(obj);
        }
    }
    return Object.values(groupedArrays);
}
exports.groupArrayOfObjectsByValueOfAKey = groupArrayOfObjectsByValueOfAKey;
// /**
//  * The function `countKeyInJSON` counts the number of occurrences of a specific key in a JSON object.
//  * @param {any} json - The `json` parameter is the JSON object or array in which you want to count the
//  * occurrences of a specific key.
//  * @param {string} key - The `key` parameter is a string that represents the key you want to count in
//  * the JSON object.
//  * @returns the count of how many times the specified key appears in the given JSON object.
//  */
// export function countKeyInJSON(json: any, key: string): number {
//   let count = 0;
//   function countKeyRecursive(obj: any): void {
//     if (typeof obj === 'object' && obj !== null) {
//       if (Array.isArray(obj)) {
//         obj.forEach((item) => countKeyRecursive(item));
//       } else {
//         for (const prop in obj) {
//           if (Object.prototype.hasOwnProperty.call(obj, prop)) {
//             countKeyRecursive(obj[prop]);
//           }
//         }
//       }
//     } else if (obj === key) {
//       // Compare the value with the key directly
//       count++;
//     }
//   }
//   countKeyRecursive(json);
//   return count;
// }
/**
 * The function counts the number of occurrences of a specific key in a JSON object or array.
 * @param {any} json - The `json` parameter is the JSON object or array that you want to search for the
 * specified key in.
 * @param {string} key - The `key` parameter is a string that represents the key you want to count in
 * the JSON object.
 * @returns the count of how many times the specified key appears in the given JSON object.
 */
function countKeyOccurrences(json, key) {
    let count = 0;
    if (typeof json === 'object' && !Array.isArray(json)) {
        const keys = Object.keys(json);
        if (keys.includes(key))
            count += 1;
        keys.forEach(k => {
            count += countKeyOccurrences(json[k], key);
        });
    }
    if (Array.isArray(json)) {
        json.forEach(item => {
            count += countKeyOccurrences(item, key);
        });
    }
    return count;
}
exports.countKeyOccurrences = countKeyOccurrences;
/**
 * The `distributePercentageEquall` function takes a JSON object and a key, and updates the values of that key in
 * the object to distribute a percentage evenly among all occurrences of the key.
 * @param {any} json - The `json` parameter is an object or an array that represents a JSON structure.
 * It can contain nested objects and arrays.
 * @param {string} key - The `key` parameter is a string that represents the key in the JSON object
 * that you want to divide the percentage for.
 * @returns the updated JSON object with the percentage values divided evenly among the objects that
 * have the specified key.
 */
function distributePercentageEquall(json, key) {
    const count = countKeyOccurrences(json, key);
    function updatePercentage(obj) {
        if (typeof obj === 'object' && !Array.isArray(obj)) {
            const keys = Object.keys(obj);
            if (keys.includes(key)) {
                obj[key] = Math.floor(100 / count);
            }
            keys.forEach(k => {
                updatePercentage(obj[k]);
            });
        }
        if (Array.isArray(obj)) {
            const percentageArray = obj.filter((item) => typeof item === 'object' && key in item);
            const percentageCount = percentageArray.length;
            if (percentageCount > 0) {
                const valuePerKey = Math.floor(100 / percentageCount);
                let remainingValue = 100 - valuePerKey * (percentageCount - 1);
                let lastPercentageIndex = -1;
                for (let i = 0; i < obj.length; i += 1) {
                    const item = obj[i];
                    if (typeof item === 'object' && key in item) {
                        if (lastPercentageIndex >= 0) {
                            obj[lastPercentageIndex][key] = valuePerKey;
                            remainingValue -= valuePerKey;
                        }
                        lastPercentageIndex = i;
                    }
                }
                if (lastPercentageIndex >= 0) {
                    obj[lastPercentageIndex][key] = remainingValue;
                }
            }
            obj.forEach(item => {
                updatePercentage(item);
            });
        }
    }
    updatePercentage(json);
    return json;
}
exports.distributePercentageEquall = distributePercentageEquall;
/**
 * Extracts unique values for a specified key from an array of objects.
 * @param {Record<string, any>[]} data - An array of objects containing various key-value pairs.
 * @param {string} key - The key to extract unique values from.
 * @returns {string[]} An array of unique string values from the specified key.
 */
function uniqueValuesOfKey(data, key) {
    if (!Array.isArray(data) || typeof key !== 'string') {
        console.error('Invalid input: data should be an array of objects, and key should be a string.');
        return [];
    }
    const uniqueValues = new Set();
    for (const item of data) {
        if (item.hasOwnProperty(key) && typeof item[key] === 'string') {
            uniqueValues.add(item[key]);
        }
    }
    return Array.from(uniqueValues);
}
exports.uniqueValuesOfKey = uniqueValuesOfKey;
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
exports.formatNumberToCommaString = formatNumberToCommaString;
/**
 * Finds the minimum and maximum values of a specified key in an array of objects.
 * @param {any[]} arr - An array of objects where each object has a property specified by the key parameter.
 * @param {string} key - The property name to be used for finding minimum and maximum values.
 * @returns {object} An object with two properties: "min" and "max". "min" represents the minimum value
 * found in the array of objects based on the specified key, and "max" represents the maximum value.
 */
function getMinMax(arr, key) {
    if (!Array.isArray(arr) || typeof key !== 'string') {
        console.error('Invalid input: arr should be an array of objects, and key should be a string.');
        return { min: null, max: null };
    }
    const values = arr.map(item => +item[key]);
    const min = Math.min(...values);
    const max = Math.max(...values);
    return { min, max };
}
exports.getMinMax = getMinMax;
/**
 * The function `strictIntersectObjects` takes two objects as input and returns a new object that
 * contains only the key-value pairs that exist in both input objects and have the same value.
 * @param obj1 - An object with string keys and any values.
 * @param obj2 - obj2 is a record object containing key-value pairs.
 * @returns a new object that contains the key-value pairs from `obj2` that also exist in `obj1` and
 * have the same value.
 */
function strictIntersectObjects(obj1, obj2) {
    const obj2Keys = Object.keys(obj2);
    if (!obj2Keys.length)
        return {};
    const intersectedObj = obj2Keys.reduce((acc, item) => {
        if (obj1[item] && obj1[item] === obj2[item])
            acc[item] = obj2[item];
        return acc;
    }, {});
    return intersectedObj;
}
exports.strictIntersectObjects = strictIntersectObjects;
function returnShortArray(ar1, ar2) {
    return ar1.length > ar2.length ? ar1 : ar2;
}
/**
 * The function `getDifferenceObject` compares two objects and returns a new object containing the
 * differences between them.
 * @param object1 - The first object to compare. It should be of type `Record<string, any>`, which
 * means it can have any number of properties of any type.
 * @param object2 - The `object2` parameter is a record (object) containing key-value pairs.
 * @returns a record object that represents the difference between `object1` and `object2`.
 */
function getDifferenceObject(object1, object2) {
    const differenceObj = {};
    //   get the keys of the object
    const obj1Keys = Object.keys(object1);
    const obj2Keys = Object.keys(object2);
    returnShortArray(obj1Keys, obj2Keys).forEach(key => {
        if (object1[key] !== object2[key] && typeof object1[key] === 'object' && typeof object2[key] === 'object') {
            // if the values are objects we do recursion
            const diff = getDifferenceObject(object1[key], object2[key]);
            //   if the diff has keys
            if (Object.keys(diff).length) {
                differenceObj[key] = diff;
            }
            return;
        }
        if (object1[key] !== object2[key]) {
            differenceObj[key] = object2[key];
        }
    });
    return differenceObj;
}
exports.getDifferenceObject = getDifferenceObject;
//# sourceMappingURL=utils.js.map