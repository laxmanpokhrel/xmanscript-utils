/* eslint-disable no-restricted-syntax */

import validateObjectsForKey from '../validateObjectsForKey';

/**
 * The function calculates the percentage of a specific key's value based on sum of values in that key in each object of an array and
 * injects it as a new property called "percentage".
 * @param {Record<string, any>[]} arr - An array of objects. Each object represents a record and
 * contains various key-value pairs.
 * @param {string} key - The `key` parameter is a string that represents the key in each object of the
 * `arr` array that contains the value to be used for calculation.
 * @returns the modified array with the added "percentage" property for each object.
 */
export default function calculateAndInjectPercentageBySum(arr: Record<string, any>[], key: string) {
  try {
    validateObjectsForKey(arr, 'value');
  } catch (error: any) {
    console.error(error.message);
    return arr;
  }

  const sumOfValuesOfKey = arr.reduce((total, item) => total + (item[key] || 0), 0);
  for (const obj of arr) {
    obj.percentage = parseFloat(((obj[key] / sumOfValuesOfKey) * 100).toFixed(2));
  }
  return arr;
}
