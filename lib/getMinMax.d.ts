/**
 * Finds the minimum and maximum values of a specified key in an array of objects.
 * @param {any[]} arr - An array of objects where each object has a property specified by the key parameter.
 * @param {string} key - The property name to be used for finding minimum and maximum values.
 * @returns {object} An object with two properties: "min" and "max". "min" represents the minimum value
 * found in the array of objects based on the specified key, and "max" represents the maximum value.
 */
export default function getMinMax(arr: any[], key: string): {
    min: any;
    max: any;
};
