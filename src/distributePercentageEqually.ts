/* eslint-disable no-param-reassign */
import countKeyOccurrences from './countKeyOccurrences';

/**
 * The `distributePercentageEqually` function takes a JSON object and a key, and updates the values of that key in
 * the object to distribute a percentage evenly among all occurrences of the key.
 * @param {any} json - The `json` parameter is an object or an array that represents a JSON structure.
 * It can contain nested objects and arrays.
 * @param {string} key - The `key` parameter is a string that represents the key in the JSON object
 * that you want to divide the percentage for.
 * @returns the updated JSON object with the percentage values divided evenly among the objects that
 * have the specified key.
 */
export default function distributePercentageEqually(json: any, key: string) {
  const count = countKeyOccurrences(json, key);

  function updatePercentage(obj: any) {
    if (typeof obj === 'object' && !Array.isArray(obj)) {
      const keys = Object.keys(obj);
      if (keys.includes(key)) {
        obj[key] = Math.floor(100 / count);
      }

      keys.forEach(k => {
        updatePercentage(obj[k]);
      });
    }

    if (Array.isArray(obj)) {
      const percentageArray = obj.filter((item: any) => typeof item === 'object' && key in item);
      const percentageCount = percentageArray.length;

      if (percentageCount > 0) {
        const valuePerKey = Math.floor(100 / percentageCount);
        let remainingValue = 100 - valuePerKey * (percentageCount - 1);
        let lastPercentageIndex = -1;

        for (let i = 0; i < obj.length; i += 1) {
          const item = obj[i];
          if (typeof item === 'object' && key in item) {
            if (lastPercentageIndex >= 0) {
              obj[lastPercentageIndex][key] = valuePerKey;
              remainingValue -= valuePerKey;
            }
            lastPercentageIndex = i;
          }
        }

        if (lastPercentageIndex >= 0) {
          obj[lastPercentageIndex][key] = remainingValue;
        }
      }

      obj.forEach(item => {
        updatePercentage(item);
      });
    }
  }

  updatePercentage(json);
  return json;
}
