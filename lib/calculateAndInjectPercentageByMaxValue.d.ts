/**
 * The function calculates and injects the percentage value based on the maximum value of a specified
 * key in an array of objects.
 * @param {Record<string, any>[]} arr - An array of objects. Each object represents a data point and
 * contains various properties.
 * @param {string} key - The `key` parameter is a string that represents the key in each object of the
 * `arr` array that contains the value to be used for calculating the percentage.
 * @returns the modified array `arr` with the added `percentage` property in each object.
 */
export default function calculateAndInjectPercentageByMaxValue(arr: Record<string, any>[], key: string): Record<string, any>[];
