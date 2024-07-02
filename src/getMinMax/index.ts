/**
 * Finds the minimum and maximum values of a specified key in an array of objects.
 * @param {any[]} arr - An array of objects where each object has a property specified by the key parameter.
 * @param {string} key - The property name to be used for finding minimum and maximum values.
 * @returns {object} An object with two properties: "min" and "max". "min" represents the minimum value
 * found in the array of objects based on the specified key, and "max" represents the maximum value.
 */
export default function getMinMax(arr: any[], key: string): { min: any; max: any } {
  if (!Array.isArray(arr) || typeof key !== 'string') {
    console.error('Invalid input: arr should be an array of objects, and key should be a string.');
    return { min: null, max: null };
  }

  const values = arr.map(item => +item[key]);
  const min = Math.min(...values);
  const max = Math.max(...values);

  return { min, max };
}
