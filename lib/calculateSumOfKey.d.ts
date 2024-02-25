/**
 * This TypeScript function calculates the sum of a specified key in an array of objects.
 * @param {Record<string, any>[]} data - An array of objects where each object has one or more
 * key-value pairs.
 * @param {string} key - The `key` parameter is a string representing the key of the property in each
 * object of the `data` array that we want to sum up.
 * @returns the sum of the values of a given key in an array of objects. If the array is empty, it
 * returns 0.
 */
export default function calculateSumOfKey(data: Record<string, any>[], key: string): number;
