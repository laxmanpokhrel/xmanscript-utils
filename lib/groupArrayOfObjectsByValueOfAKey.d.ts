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
export default function groupArrayOfObjectsByValueOfAKey(arr: Record<string, any>[], key: string): Record<string, any>[][];
