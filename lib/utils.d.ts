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
export declare function partitionObjectsByKey(arr: Record<string, any>[], key: string): [Record<string, any>[], Record<string, any>[]];
/**
 * The function `containsBinaryData` checks if an object contains any binary data (Blob, File, or
 * ArrayBuffer) recursively.
 * @param obj - The `obj` parameter is an object of type `Record<string, any>`, which means it is a
 * generic object with string keys and any values. This function is used to check if the object
 * contains any binary data, such as `Blob`, `File`, or `ArrayBuffer` instances.
 * @returns The function `containsBinaryData` returns a boolean value.
 */
export declare function containsBinaryData(obj: Record<string, any>): boolean;
/**
 * The function checks if a given string is a valid JSON object.
 * @param {string} value - The parameter `value` is a string that represents a JSON object.
 * @returns The function isJSONObject returns a boolean value. It returns true if the input value is a
 * valid JSON object, and false otherwise.
 */
export declare function isJSONObject(value: string): boolean;
/**
 * The function `objectToFormDataWithFiles` converts a JSON object into a FormData object, handling file uploads
 * and nested objects.
 * @param obj - The `obj` parameter is an object that contains key-value pairs. The keys represent the
 * names of the form fields, and the values represent the corresponding values for those fields. The
 * values can be of any type, including strings, numbers, booleans, arrays, or objects. Additionally,
 * the `
 * @returns a FormData object.
 */
export declare function objectToFormDataWithFiles(obj: Record<string, any>): FormData;
/**
 * The function `areObjectsEqual` checks if two objects are equal by comparing their keys and values.
 * @param {any} obj1 - The first object to compare.
 * @param {any} obj2 - The `obj2` parameter is an object that you want to compare with `obj1` to check
 * if they are equal.
 * @returns a boolean value. It returns true if the two objects are equal, and false otherwise.
 */
export declare function areObjectsEqual(obj1: any, obj2: any): boolean;
/**
 * The function converts a number into a currency system by abbreviating it with B for billions, M for
 * millions, and K for thousands.
 * @param {number} labelValue - The `labelValue` parameter is a number that represents a value in a
 * certain currency system.
 * @returns a string or a number.
 */
export declare function abbreviateCurrencyValue(labelValue: number): string | number;
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
export declare function omitKey<T, K extends keyof T>(obj: T, key: K): Omit<T, K>;
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
export declare function setKeysToValueInObjects(arr: Record<string, any>[], keys: string[], value: any): Record<string, any>[];
/**
 * The function removes the target string from the array if it exists, otherwise it adds the target
 * string to the array.
 * @param {string[]} arr - An array of strings.
 * @param {string} targetString - The targetString parameter is the string that you want to either
 * remove from the array or add to the array.
 * @returns an array of strings.
 */
export declare function toggleStringInArray(arr: string[], targetString: string): string[];
/**
 * The function removes the target object from the array if it exists, otherwise it adds it to the
 * array.
 * @param {T[]} arr - An array of objects of type T.
 * @param {T} targetObject - The `targetObject` parameter is the object that you want to either remove
 * from the array if it exists, or add to the array if it doesn't exist.
 * @returns the updated array after either removing or adding the target object.
 */
export declare function toggleObjectInArray<T>(arr: T[], targetObject: T): T[];
/**
 * The function calculates and injects the percentage value based on the maximum value of a specified
 * key in an array of objects.
 * @param {Record<string, any>[]} arr - An array of objects. Each object represents a data point and
 * contains various properties.
 * @param {string} key - The `key` parameter is a string that represents the key in each object of the
 * `arr` array that contains the value to be used for calculating the percentage.
 * @returns the modified array `arr` with the added `percentage` property in each object.
 */
export declare function calculateAndInjectPercentageByMaxValue(arr: Record<string, any>[], key: string): Record<string, any>[];
/**
 * The function calculates the percentage of a specific key's value based on sum of values in that key in each object of an array and
 * injects it as a new property called "percentage".
 * @param {Record<string, any>[]} arr - An array of objects. Each object represents a record and
 * contains various key-value pairs.
 * @param {string} key - The `key` parameter is a string that represents the key in each object of the
 * `arr` array that contains the value to be used for calculation.
 * @returns the modified array with the added "percentage" property for each object.
 */
export declare function calculateAndInjectPercentageBySum(arr: Record<string, any>[], key: string): Record<string, any>[];
/**
 * This TypeScript function calculates the sum of a specified key in an array of objects.
 * @param {Record<string, any>[]} data - An array of objects where each object has one or more
 * key-value pairs.
 * @param {string} key - The `key` parameter is a string representing the key of the property in each
 * object of the `data` array that we want to sum up.
 * @returns the sum of the values of a given key in an array of objects. If the array is empty, it
 * returns 0.
 */
export declare function calculateSumOfKey(data: Record<string, any>[], key: string): number;
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
export declare function setValueOfKeyForMatchingValuesOfAKey(arr: Record<string, any>[], key: string, values: string[], updateKey: string, value: any): Record<string, any>[];
type ScrollLogicalPosition = 'center' | 'end' | 'nearest' | 'start';
type scrollToComponentProps = {
    componentId: string;
    focusAfterScroll?: boolean;
    scrollDelay?: number;
    focusDelay?: number;
    align?: ScrollLogicalPosition;
};
/**
 * The scrollToComponent function scrolls to a specified component on the page and optionally focuses
 * on it after scrolling.
 * @param {scrollToComponentProps}  - - `componentId`: The id of the component to scroll to.
 *  'align': The alignment of the component after scrolling. It can be one of the following values:
 * 'start', 'center', or 'end'. The default value is 'center'.
 * 'delay': The delay in milliseconds before scrolling to the component.
 */
export declare function scrollToComponent({ componentId, focusAfterScroll, scrollDelay, focusDelay, align, }: scrollToComponentProps): void;
/**
 * The function converts an input object with nested keys in the format of "name[index].nestedKey" into
 * an output object with nested arrays and objects.
 * @param input - The input parameter is a JavaScript object with string keys and any values.
 * @returns an object with the converted input. The input is an object with string keys and any values.
 * The function converts any keys that match the pattern of "name[index].nestedKey" into nested objects
 * within an array. The function returns the converted object.
 */
export declare function convertNestedKeysToObject(input: Record<string, any>): any;
/**
 * The function divides a given percentage into equal parts and distributes any remaining percentage
 * across the parts.
 * @param {Record<string, any>[]} array - The `array` parameter is an array of objects, where each
 * object represents a part that needs to be divided into equal parts. Each object can have any
 * properties, but in this case, we are only interested in the `percentage` property.
 * @returns an array of objects, where each object represents a part and contains a "percentage"
 * property.
 */
export declare function distributePercentageEquallyWithRemainder(array: Record<string, any>[]): Record<string, any>[];
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
export declare function markCheckedByStringMatch<T>(objects: T[], strings: string[], chooseKey: keyof T): T[];
/**
 * The function splits an array into multiple arrays of a specified size.
 * @param {Record<string, any>[]} array - An array of objects, where each object has string keys and
 * any values.
 * @param {number} size - The `size` parameter represents the desired size of each subarray. It
 * determines how many elements should be included in each subarray when splitting the original array.
 * @returns an array of arrays. Each inner array contains a subset of the original array, with each
 * subset having a maximum size specified by the "size" parameter.
 */
export declare function splitArrayIntoChunks(array: Record<string, any>[], size: number): Record<string, any>[][];
/**
 * The intersectObjects function takes two objects as input and returns a new object that contains
 * only the properties that exist in both input objects.
 * @param obj1 - An object of type `Record<string, any>`, which means it can have any number of
 * properties of any type.
 * @param obj2 - The `obj2` parameter is a record object that contains key-value pairs.
 * @returns The function `intersectObjects` returns a new object that contains the intersection of
 * properties between `obj1` and `obj2`.
 */
export declare function intersectObjects(obj1: Record<string, any>, obj2: Record<string, any>): Record<string, any>;
/**
 * The function `getFileExtension` takes a URL as input and returns the file extension of the URL, or
 * an empty string if no extension is found.
 * @param {string | undefined} url - The `url` parameter is a string that represents the URL of a file.
 * @returns the file extension of a given URL as a lowercase string. If the URL is undefined or empty,
 * an empty string is returned. If no file extension is found in the URL, null is returned.
 */
export declare function getFileExtension(url: string | undefined): string | null;
/**
 * The function removes a specified object from an array of objects.
 * @param {Record<string, any>[]} objects - An array of objects.
 * @param object - The `object` parameter is the object that you want to remove from the `objects`
 * array.
 * @returns the updated array after removing the specified object.
 */
export declare function removeObjectFromArray(objects: Record<string, any>[], object: Record<string, any>): Record<string, any>[];
/**
 * The function `parseToBoolean` takes a string as input and returns a boolean value if the string is
 * either 'true' or 'false', otherwise it logs an error message and returns undefined.
 * @param {string} val - The `val` parameter is a string that represents a boolean value.
 * @returns The function `parseToBoolean` returns a boolean value if the input string can be parsed to
 * either `true` or `false`. If the input string is not equal to either `true` or `false`, it logs an
 * error message to the console and returns `undefined`.
 */
export declare function parseToBoolean(val: string): boolean | undefined;
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
export declare function groupArrayOfObjectsByValueOfAKey(arr: Record<string, any>[], key: string): Record<string, any>[][];
/**
 * The function counts the number of occurrences of a specific key in a JSON object or array.
 * @param {any} json - The `json` parameter is the JSON object or array that you want to search for the
 * specified key in.
 * @param {string} key - The `key` parameter is a string that represents the key you want to count in
 * the JSON object.
 * @returns the count of how many times the specified key appears in the given JSON object.
 */
export declare function countKeyOccurrences(json: any, key: string): number;
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
export declare function distributePercentageEquall(json: any, key: string): any;
/**
 * Extracts unique values for a specified key from an array of objects.
 * @param {Record<string, any>[]} data - An array of objects containing various key-value pairs.
 * @param {string} key - The key to extract unique values from.
 * @returns {string[]} An array of unique string values from the specified key.
 */
export declare function uniqueValuesOfKey(data: Record<string, any>[], key: string): string[];
/**
 * Converts a number to a comma-separated string representation, rounded to the nearest whole number.
 * @param {number} value - The number to be converted.
 * @returns {string} A comma-separated string representation of the rounded number.
 */
export declare function formatNumberToCommaString(value: number): string;
/**
 * Finds the minimum and maximum values of a specified key in an array of objects.
 * @param {any[]} arr - An array of objects where each object has a property specified by the key parameter.
 * @param {string} key - The property name to be used for finding minimum and maximum values.
 * @returns {object} An object with two properties: "min" and "max". "min" represents the minimum value
 * found in the array of objects based on the specified key, and "max" represents the maximum value.
 */
export declare function getMinMax(arr: any[], key: string): {
    min: any;
    max: any;
};
/**
 * The function `strictIntersectObjects` takes two objects as input and returns a new object that
 * contains only the key-value pairs that exist in both input objects and have the same value.
 * @param obj1 - An object with string keys and any values.
 * @param obj2 - obj2 is a record object containing key-value pairs.
 * @returns a new object that contains the key-value pairs from `obj2` that also exist in `obj1` and
 * have the same value.
 */
export declare function strictIntersectObjects(obj1: Record<string, any>, obj2: Record<string, any>): Record<string, any>;
/**
 * The function `getDifferenceObject` compares two objects and returns a new object containing the
 * differences between them.
 * @param object1 - The first object to compare. It should be of type `Record<string, any>`, which
 * means it can have any number of properties of any type.
 * @param object2 - The `object2` parameter is a record (object) containing key-value pairs.
 * @returns a record object that represents the difference between `object1` and `object2`.
 */
export declare function getDifferenceObject(object1: Record<string, any>, object2: Record<string, any>): Record<string, any>;
export {};
