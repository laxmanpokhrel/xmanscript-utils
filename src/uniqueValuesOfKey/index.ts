/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
/**
 * Extracts unique values for a specified key from an array of objects.
 * @param {Record<string, any>[]} data - An array of objects containing various key-value pairs.
 * @param {string} key - The key to extract unique values from.
 * @returns {string[]} An array of unique string values from the specified key.
 */
export default function uniqueValuesOfKey(data: Record<string, any>[], key: string): string[] {
  if (!Array.isArray(data) || typeof key !== 'string') {
    console.error('Invalid input: data should be an array of objects, and key should be a string.');
    return [];
  }

  const uniqueValues: Set<string> = new Set();

  for (const item of data) {
    if (item.hasOwnProperty(key) && typeof item[key] === 'string') {
      uniqueValues.add(item[key]);
    }
  }

  return Array.from(uniqueValues);
}
