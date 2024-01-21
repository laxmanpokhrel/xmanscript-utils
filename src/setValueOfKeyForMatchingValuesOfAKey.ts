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
export default function setValueOfKeyForMatchingValuesOfAKey(
  arr: Record<string, any>[],
  key: string,
  values: string[],
  updateKey: string,
  value: any
): Record<string, any>[] {
  return arr.map(item => {
    if (values.includes(item[key])) {
      return { ...item, [updateKey]: value };
    }
    return item;
  });
}
