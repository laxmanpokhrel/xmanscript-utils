/**
 * The function validates an array of objects to ensure that each object has a valid numeric property
 * with a specified key.
 * @param {Record<string, any>[]} arr - An array of objects. Each object in the array should have a
 * property with the name specified by the 'key' parameter.
 * @param {string} key - The `key` parameter is a string that represents the property key that we want
 * to validate in each object of the `arr` array.
 * @returns The function `validateObjectsForKey` returns either an `Error` object or `true`.
 */
export default function validateObjectsForKey(arr: Record<string, any>[], key: string): Error | true;
