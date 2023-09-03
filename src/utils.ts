/* eslint-disable no-console */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-continue */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */

/**
 * The function checks if an object contains binary data by recursively iterating through its
 * properties.
 * @param obj - The `obj` parameter is an object of type `Record<string, any>`, which means it is an
 * object with string keys and values of any type.
 * @returns a boolean value.
 */
export function hasBinaryData(obj: Record<string, any>): boolean {
  if (typeof obj !== 'object') {
    return false;
  }

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      if (value instanceof Blob || value instanceof File || value instanceof ArrayBuffer) {
        return true;
      }
      if (typeof value === 'object' && hasBinaryData(value)) {
        return true;
      }
    }
  }

  return false;
}

/**
 * The function checks if a given string is a valid JSON object.
 * @param {string} value - The parameter `value` is a string that represents a JSON object.
 * @returns The function isJSONObject returns a boolean value. It returns true if the input value is a
 * valid JSON object, and false otherwise.
 */
export function isJSONObject(value: string): boolean {
  if (typeof value !== 'string') {
    return false;
  }
  try {
    const parsedValue = JSON.parse(value);
    return typeof parsedValue === 'object';
  } catch (error) {
    return false;
  }
}

/**
 * The function `jsonToFormData` converts a JSON object into a FormData object, handling file uploads
 * and nested objects.
 * @param obj - The `obj` parameter is an object that contains key-value pairs. The keys represent the
 * names of the form fields, and the values represent the corresponding values for those fields. The
 * values can be of any type, including strings, numbers, booleans, arrays, or objects. Additionally,
 * the `
 * @returns a FormData object.
 */
export function jsonToFormData(obj: Record<string, any>): FormData {
  const formData = new FormData();
  const { file, ...rest } = obj;
  file.forEach((item: File) => {
    formData.append('file', item);
  });
  Object.keys(rest).forEach((key) => {
    const value = rest[key];
    if (Array.isArray(value) || isJSONObject(value)) formData.append(key, JSON.stringify(value));
    else formData.append(key, value);
  });
  return formData;
}

/**
 * The function `objectsEqual` checks if two objects are equal by comparing their keys and values.
 * @param {any} obj1 - The first object to compare.
 * @param {any} obj2 - The `obj2` parameter is an object that you want to compare with `obj1` to check
 * if they are equal.
 * @returns a boolean value. It returns true if the two objects are equal, and false otherwise.
 */

export function objectsEqual(obj1: any, obj2: any): boolean {
  if (obj1 === obj2) {
    return true;
  }

  if (obj1 == null || obj2 == null) {
    return false;
  }

  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (const key of obj1Keys) {
    if (!obj2.hasOwnProperty(key)) {
      return false;
    }
    const value1 = obj1[key];
    const value2 = obj2[key];
    if (value1 !== value2) {
      return false;
    }
  }

  return true;
}

/**
 * The function converts a number into a currency system by abbreviating it with B for billions, M for
 * millions, and K for thousands.
 * @param {number} labelValue - The `labelValue` parameter is a number that represents a value in a
 * certain currency system.
 * @returns a string or a number.
 */

export function convertToCurrencySystem(labelValue: number): string | number {
  // Nine Zeroes for Billions
  return Math.abs(Number(labelValue)) >= 1.0e9
    ? `${(Math.abs(Number(labelValue)) / 1.0e9).toFixed(1)} B`
    : // Six Zeroes for Millions
    Math.abs(Number(labelValue)) >= 1.0e6
    ? `${(Math.abs(Number(labelValue)) / 1.0e6).toFixed(1)} M`
    : // Three Zeroes for Thousands
    Math.abs(Number(labelValue)) >= 1.0e3
    ? `${(Math.abs(Number(labelValue)) / 1.0e3).toFixed(1)} K`
    : Math.abs(Number(labelValue));
}

/**
 * The `removeKeyFromObject` function removes a specified key from an object and returns a new object
 * without that key.
 * @param {T} obj - The `obj` parameter is the object from which you want to remove a key. It can be of
 * any type `T`.
 * @param {K} key - The `key` parameter is the key of the property that you want to remove from the
 * object. It should be a valid key of the object's type `T`.
 * @returns an object of type `Omit<T, K>`, which is the original object `obj` with the specified `key`
 * removed.
 */
export function removeKeyFromObject<T, K extends keyof T>(obj: T, key: K): Omit<T, K> {
  const { [key]: omitted, ...rest } = obj;
  return rest;
}

/**
 * The function assigns the value of zero to a specified key in each object of an array.
 * @param {Record<string, any>[]} arr - An array of objects with string keys and any values.
 * @param {string} key - The `key` parameter is a string that represents the key in each object of the
 * `arr` array that you want to assign the value of zero to.
 * @returns an array of objects where the specified key is assigned the value of zero.
 */
export function assignZeroToKey(arr: Record<string, any>[], key: string): Record<string, any>[] {
  if (!key) return arr;

  const value = arr.map((obj) => {
    return {
      ...obj,
      [key]: 0,
    };
  });
  return value;
}

/**
 * The function `assignZeroToKeys` takes an array of objects and an array of keys, and returns a new
 * array of objects where the specified keys are assigned the value 0.
 * @param {Record<string, any>[]} arr - An array of objects, where each object represents a record with
 * key-value pairs.
 * @param {string[]} keys - An array of strings representing the keys that need to be assigned the
 * value of zero in each object in the array.
 * @returns an array of objects where the specified keys are assigned the value of zero.
 */
export function assignZeroToKeys(arr: Record<string, any>[], keys: string[]): Record<string, any>[] {
  if (!keys.length) return arr;

  return arr.map((obj) => {
    const newObj: Record<string, any> = { ...obj };
    keys.forEach((key) => {
      newObj[key] = 0;
    });
    return newObj;
  });
}

/**
 * The function removes the target string from the array if it exists, otherwise it adds the target
 * string to the array.
 * @param {string[]} arr - An array of strings.
 * @param {string} targetString - The targetString parameter is the string that you want to either
 * remove from the array or add to the array.
 * @returns an array of strings.
 */
export function removeOrAddStringFromArray(arr: string[], targetString: string): string[] {
  const index = arr.indexOf(targetString);

  if (index !== -1) {
    arr.splice(index, 1);
  } else {
    arr.push(targetString);
  }
  return arr;
}

// Utility function to compare two objects for equality
function isEqual<T>(a: T, b: T): boolean {
  return JSON.stringify(a) === JSON.stringify(b);
}

/**
 * The function removes the target object from the array if it exists, otherwise it adds it to the
 * array.
 * @param {T[]} arr - An array of objects of type T.
 * @param {T} targetObject - The `targetObject` parameter is the object that you want to either remove
 * from the array if it exists, or add to the array if it doesn't exist.
 * @returns the updated array after either removing or adding the target object.
 */
export function removeOrAddObjectFromArray<T>(arr: T[], targetObject: T): T[] {
  const index = arr.findIndex((obj) => isEqual(obj, targetObject));

  if (index !== -1) {
    arr.splice(index, 1);
  } else {
    arr.push(targetObject);
  }
  return arr;
}

/**
 * This TypeScript function calculates the percentage of a value in relation to a total.
 * @param {number} total - The total number or quantity that the value is being compared to.
 * @param {number} value - The value parameter represents the numerical value that you want to
 * calculate the percentage of.
 * @returns The function `calculatePercentage` returns a number, which is the percentage calculated
 * based on the `total` and `value` parameters passed to the function. If the `total` parameter is 0,
 * the function returns 0.
 */
export function calculatePercentage(total: number, value: number): number {
  if (!total || !value) return 0;
  if (total === 0) {
    return 0;
  }
  return (value / total) * 100;
}

/**
 * The function calculates the percentage of a specific key's value in each object of an array and
 * injects the percentage value into each object.
 * @param {Record<string, any>[]} arr - An array of objects. Each object represents a data entry and
 * contains various properties.
 * @param {string} key - The "key" parameter is a string that represents the key or property name in
 * each object of the "arr" array. This key is used to access the corresponding value in each object
 * for calculating the percentage.
 * @returns the modified array `arr` with an additional `percentage` property added to each object.
 */
export function calculatePercentageAndInjectValue(arr: Record<string, any>[], key: string) {
  const maxValue = Math.max(...arr.map((obj) => obj[key]));
  for (const obj of arr) {
    obj.percentage = parseFloat(((obj[key] / maxValue) * 100).toFixed(2));
  }
  return arr;
}

/**
 * This TypeScript function calculates the sum of a specified key in an array of objects.
 * @param {Record<string, any>[]} data - An array of objects where each object has one or more
 * key-value pairs.
 * @param {string} key - The `key` parameter is a string representing the key of the property in each
 * object of the `data` array that we want to sum up.
 * @returns the sum of the values of a given key in an array of objects. If the array is empty, it
 * returns 0.
 */
export function getSumOfKey(data: Record<string, any>[], key: string) {
  if (data.length === 0) {
    return 0;
  }
  const total = data
    .map((item: any) => item[key])
    .reduce((sum: number, item: any) => {
      const y = sum + +item;
      return y;
    });
  return total;
}

/**
 * This TypeScript function changes the 'value' property of objects in an array if their specified key-value pair
 * matches the provided values. The 'value' property of matching objects will be set to zero.
 * @param {Record<string, any>[]} arr - An array of objects where each object has key-value pairs.
 * @param {string} key - The key parameter is a string that represents the key or property name of
 * the object in the array that we want to check for a specific value.
 * @param {any[]} values - An array of values to be matched against the value of the specified key
 * in each object. Objects with matching key-value pairs will have their 'value' property set to zero.
 * @returns the modified array where the 'value' property of matching objects is set to zero.
 */
export function setZeroValueForObjectsWithKeyValues(
  arr: Record<string, any>[],
  key: string,
  values: string[],
): Record<string, any>[] {
  return arr.map((item) => {
    if (values.includes(item[key])) {
      return { ...item, value: 0 };
    }
    return item;
  });
}

type scrollToComponentProps = { componentId: string; focusAfterScroll: boolean };
/**
 * The scrollToComponent function scrolls to a specified component on the page and optionally focuses
 * on it after scrolling.
 * @param {scrollToComponentProps}  - - `componentId`: The id of the component to scroll to.
 */
export function scrollToComponent({ componentId, focusAfterScroll }: scrollToComponentProps) {
  const element = document.getElementById(componentId);

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
    if (focusAfterScroll) {
      element.focus();
      setTimeout(() => {}, 800);
      element.focus();
    }
  }
}

/**
 * The function replaces an object at a specified position in an array and returns a new array.
 * @param {T[]} arr - An array of type T, which represents the original array where the object needs to
 * be replaced.
 * @param {number} position - The `position` parameter represents the index at which the `newObj`
 * should replace the existing object in the `arr` array.
 * @param {T} newObj - The `newObj` parameter is the new object that you want to replace at the
 * specified position in the array.
 * @returns The function `replaceObjectAtPosition` returns a new array with the object at the specified
 * position replaced with the new object.
 */
export function replaceObjectAtPosition<T>(arr: T[], position: number, newObj: T): T[] {
  if (position < 0 || position >= arr.length) {
    throw new Error('Invalid position');
  }

  const newArray = [...arr];
  newArray[position] = newObj;
  return newArray;
}

/**
 * The function converts an input object with nested keys in the format of "name[index].nestedKey" into
 * an output object with nested arrays and objects.
 * @param input - The input parameter is a JavaScript object with string keys and any values.
 * @returns an object with the converted input. The input is an object with string keys and any values.
 * The function converts any keys that match the pattern of "name[index].nestedKey" into nested objects
 * within an array. The function returns the converted object.
 */
export function convertObject(input: Record<string, any>): any {
  const output: Record<string, any> = {};
  for (const key in input) {
    if (input.hasOwnProperty(key)) {
      const match = key.match(/^(.*?)\[(\d+)\]\.(.*)$/);
      if (match) {
        const name = match[1];
        const index = match[2];
        const nestedKey = match[3];

        if (!output[name]) {
          output[name] = [];
        }
        if (!output[name][index]) {
          output[name][index] = {};
        }

        output[name][index][nestedKey] = input[key];
      } else {
        output[key] = input[key];
      }
    }
  }
  return output;
}

/**
 * This TypeScript function removes an object from an array at a specified index and returns a new
 * array.
 * @param {T[]} array - An array of elements of type T.
 * @param {number} index - The index parameter is a number that represents the position of the object
 * to be removed from the array. It should be a non-negative integer that is less than the length of
 * the array.
 * @returns a new array with the object at the specified index removed. If the index is out of bounds,
 * the function returns the original array.
 */
export function removeObjectAtIndex<T>(array: T[], index: number): T[] {
  if (index < 0 || index >= array.length) {
    return array;
  }
  const newArray = [...array.slice(0, index), ...array.slice(index + 1)];
  return newArray;
}

/**
 * The function divides a given percentage into equal parts and distributes any remaining percentage
 * across the parts.
 * @param {Record<string, any>[]} array - The `array` parameter is an array of objects, where each
 * object represents a part that needs to be divided into equal parts. Each object can have any
 * properties, but in this case, we are only interested in the `percentage` property.
 * @returns an array of objects, where each object represents a part and contains a "percentage"
 * property.
 */
export function dividePercentageIntoEqualParts(array: Record<string, any>[]): Record<string, any>[] {
  const equalPartPercentage = Math.floor(100 / array.length);
  const remainingPercentage = 100 % array.length;

  const parts: Record<string, any>[] = [];

  // Create equal parts with the calculated percentage
  for (let i = 0; i < array.length; i++) {
    const part: Record<string, any> = {
      percentage: +equalPartPercentage,
    };
    parts.push(part);
  }

  // Distribute the remaining percentage across the parts
  for (let i = 0; i < remainingPercentage; i++) {
    parts[i].percentage++;
  }
  return parts;
}

/**
 * The function adds a "checked" field to each object in an array based on whether a corresponding
 * string value is included in another array.
 * @param {T[]} objects - An array of objects of type T.
 * @param {string[]} strings - An array of strings that will be used to check against the values of the
 * chooseKey property in each object.
 * @param chooseKey - The `chooseKey` parameter is the key of the property in the objects that you want
 * to compare with the strings. It is of type `keyof T`, which means it can be any valid key of the
 * objects in the `objects` array.
 * @returns The function `addCheckedFieldByString` returns an array of objects of type `T` with an
 * additional `checked` field.
 */

export function addCheckedFieldByString<T>(objects: T[], strings: string[], chooseKey: keyof T): T[] {
  const x = objects.map((object) => {
    const chooseValue = (object[chooseKey] as unknown as string).toString();
    const checked = strings.includes(chooseValue);
    return { ...object, checked };
  });
  return x;
}

/**
 * The function splits an array into multiple arrays of a specified size.
 * @param {Record<string, any>[]} array - An array of objects, where each object has string keys and
 * any values.
 * @param {number} size - The `size` parameter represents the desired size of each subarray. It
 * determines how many elements should be included in each subarray when splitting the original array.
 * @returns an array of arrays. Each inner array contains a subset of the original array, with each
 * subset having a maximum size specified by the "size" parameter.
 */
export function splitArrayToMultipleArrayOfSize(array: Record<string, any>[], size: number) {
  return array.reduce((acc: Record<string, any>[][], current: Record<string, any>) => {
    if (acc.length === 0 || acc[acc.length - 1].length === size) {
      acc.push([current]);
    } else {
      acc[acc.length - 1].push(current);
    }
    return acc;
  }, []);
}

/**
 * The function calculates the percentage of one number in relation to another number.
 * @param {number} x - The first parameter, x, is a number that represents the numerator in a fraction.
 * @param {number} y - The parameter "y" represents the total value or the denominator in a fraction.
 * @returns the percentage of x in relation to y.
 */
export function getPercentage(x: number, y: number): number {
  return (x / y) * 100;
}

/**
 * The IntersectionOfObjects function takes two objects as input and returns a new object that contains
 * only the properties that exist in both input objects.
 * @param obj1 - An object of type `Record<string, any>`, which means it can have any number of
 * properties of any type.
 * @param obj2 - The `obj2` parameter is a record object that contains key-value pairs.
 * @returns The function `IntersectionOfObjects` returns a new object that contains the intersection of
 * properties between `obj1` and `obj2`.
 */
export function IntersectionOfObjects(obj1: Record<string, any>, obj2: Record<string, any>): Record<string, any> {
  const obj2Keys = Object.keys(obj2);
  if (!obj2Keys.length) return {};
  const intersectedObj = obj2Keys.reduce((acc: Record<string, any>, item: string) => {
    if (obj1[item]) acc[item] = obj1[item];
    return acc;
  }, {});
  return intersectedObj;
}

/**
 * The function `getFileExtension` takes a URL as input and returns the file extension of the URL, or
 * an empty string if no extension is found.
 * @param {string | undefined} url - The `url` parameter is a string that represents the URL of a file.
 * @returns the file extension of a given URL as a lowercase string. If the URL is undefined or empty,
 * an empty string is returned. If no file extension is found in the URL, null is returned.
 */
export function getFileExtension(url: string | undefined): string | null {
  if (!url) return '';
  const lastDotIndex = url.lastIndexOf('.');
  if (lastDotIndex === -1) {
    return null; // No file extension found
  }
  const extension = url.slice(lastDotIndex + 1);
  return extension.toLowerCase();
}

/**
 * The function removes a specified object from an array of objects.
 * @param {Record<string, any>[]} objects - An array of objects.
 * @param object - The `object` parameter is the object that you want to remove from the `objects`
 * array.
 * @returns the updated array after removing the specified object.
 */
export function removeObjectFromArrayOfObjects(objects: Record<string, any>[], object: Record<string, any>) {
  const index: number = objects.findIndex((item) => JSON.stringify(item) === JSON.stringify(object));
  if (index < 0) return objects;
  const result = removeObjectAtIndex(objects, index);
  return result;
}

/**
 * The function `splitArrayByIteratorId` takes an array of objects and splits it into two arrays based
 * on whether each object has an `iteratorId` property or not.
 * @param {Record<string, any>[]} arr - An array of objects, where each object has a string key and any
 * value.
 * @returns The function `splitArrayByIteratorId` returns an array containing two elements. The first
 * element is an array of objects that have the property `iteratorId`, and the second element is an
 * array of objects that do not have the property `iteratorId`.
 */
export function splitArrayByIteratorId(arr: Record<string, any>[]): [Record<string, any>[], Record<string, any>[]] {
  const withIteratorId: Record<string, any>[] = [];
  const withoutIteratorId: Record<string, any>[] = [];

  for (const item of arr) {
    if (item.iteratorId) {
      withIteratorId.push(item);
    } else {
      withoutIteratorId.push(item);
    }
  }

  return [withIteratorId, withoutIteratorId];
}

/**
 * The function "parseToBoolean" takes a string value and returns a boolean value based on whether the
 * string is equal to "true".
 * @param {string} val - The `val` parameter is a string that represents a boolean value.
 * @returns a boolean value. If the input string is equal to 'true', it will return true. Otherwise, it
 * will return false.
 */
export function parseToBollean(val: string): boolean {
  if (val === 'true') return true;
  return false;
}

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
export function groupArrayOfObjectsByValueOfAKey(arr: Record<string, any>[], key: string): Record<string, any>[][] {
  const groupedArrays: { [key: string]: Record<string, any>[] } = {};

  for (const obj of arr) {
    const keyValue = obj[key];
    if (keyValue === undefined || keyValue === null) {
      continue;
    }

    if (!groupedArrays[keyValue]) {
      groupedArrays[keyValue] = [obj];
    } else {
      groupedArrays[keyValue].push(obj);
    }
  }
  return Object.values(groupedArrays);
}

// /**
//  * The function `countKeyInJSON` counts the number of occurrences of a specific key in a JSON object.
//  * @param {any} json - The `json` parameter is the JSON object or array in which you want to count the
//  * occurrences of a specific key.
//  * @param {string} key - The `key` parameter is a string that represents the key you want to count in
//  * the JSON object.
//  * @returns the count of how many times the specified key appears in the given JSON object.
//  */
// export function countKeyInJSON(json: any, key: string): number {
//   let count = 0;

//   function countKeyRecursive(obj: any): void {
//     if (typeof obj === 'object' && obj !== null) {
//       if (Array.isArray(obj)) {
//         obj.forEach((item) => countKeyRecursive(item));
//       } else {
//         for (const prop in obj) {
//           if (Object.prototype.hasOwnProperty.call(obj, prop)) {
//             countKeyRecursive(obj[prop]);
//           }
//         }
//       }
//     } else if (obj === key) {
//       // Compare the value with the key directly
//       count++;
//     }
//   }

//   countKeyRecursive(json);
//   return count;
// }

/**
 * The function counts the number of occurrences of a specific key in a JSON object or array.
 * @param {any} json - The `json` parameter is the JSON object or array that you want to search for the
 * specified key in.
 * @param {string} key - The `key` parameter is a string that represents the key you want to count in
 * the JSON object.
 * @returns the count of how many times the specified key appears in the given JSON object.
 */
export function countKeyInJSON(json: any, key: string) {
  let count = 0;

  if (typeof json === 'object' && !Array.isArray(json)) {
    const keys = Object.keys(json);
    if (keys.includes(key)) count++;

    keys.forEach((k) => {
      count += countKeyInJSON(json[k], key);
    });
  }

  if (Array.isArray(json)) {
    json.forEach((item) => {
      count += countKeyInJSON(item, key);
    });
  }

  return count;
}

/**
 * The `dividePercentage` function takes a JSON object and a key, and updates the values of that key in
 * the object to distribute a percentage evenly among all occurrences of the key.
 * @param {any} json - The `json` parameter is an object or an array that represents a JSON structure.
 * It can contain nested objects and arrays.
 * @param {string} key - The `key` parameter is a string that represents the key in the JSON object
 * that you want to divide the percentage for.
 * @returns the updated JSON object with the percentage values divided evenly among the objects that
 * have the specified key.
 */
export function dividePercentage(json: any, key: string) {
  const count = countKeyInJSON(json, key);

  function updatePercentage(obj: any) {
    if (typeof obj === 'object' && !Array.isArray(obj)) {
      const keys = Object.keys(obj);
      if (keys.includes(key)) {
        obj[key] = Math.floor(100 / count);
      }

      keys.forEach((k) => {
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

        for (let i = 0; i < obj.length; i++) {
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

      obj.forEach((item) => {
        updatePercentage(item);
      });
    }
  }

  updatePercentage(json);
  return json;
}

/**
 * Extracts unique values for a specified key from an array of objects.
 * @param {Record<string, any>[]} data - An array of objects containing various key-value pairs.
 * @param {string} key - The key to extract unique values from.
 * @returns {string[]} An array of unique string values from the specified key.
 */
export function extractUniqueValuesByKey(data: Record<string, any>[], key: string): string[] {
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

/**
 * Filters an array of objects to return objects that have a specified key-value pair.
 * @param {Record<string, any>[]} array - An array of objects where each object has multiple key-value pairs.
 * @param {string} key - The property name to search for in the objects.
 * @param {any} value - The value to search for in the specified key.
 * @returns {Record<string, any>[]} An array of objects that have the specified key-value pair.
 */
export function filterObjectsByKeyAndValue(
  array: Record<string, any>[],
  key: string,
  value: any,
): Record<string, any>[] {
  if (!Array.isArray(array) || typeof key !== 'string') {
    console.error('Invalid input: array should be an array of objects, and key should be a string.');
    return [];
  }

  return array.filter((item) => item[key] === value);
}

/**
 * Removes a specific value from an array of strings and returns the updated array.
 * @param {string[]} arr - An array of strings from which to remove a specific value.
 * @param {string} value - The string value to remove from the array.
 * @returns {string[]} A new array of strings with the specified value removed.
 */
export function removeValueFromArray(arr: string[], value: string): string[] {
  if (!Array.isArray(arr)) {
    console.error('Invalid input: arr should be an array of strings.');
    return [];
  }

  return arr.filter((item) => item !== value);
}

/**
 * Converts a number to a comma-separated string representation, rounded to the nearest whole number.
 * @param {number} value - The number to be converted.
 * @returns {string} A comma-separated string representation of the rounded number.
 */
export function formatNumberWithCommas(value: number): string {
  if (typeof value !== 'number') {
    console.error('Invalid input: value should be a number.');
    return '';
  }

  return Math.round(value).toLocaleString('en-US');
}

/**
 * Checks if an object or array is empty by examining its length or the number of keys it has.
 * @param {Record<string, any> | any[]} obj - The object or array to be checked.
 * @returns {boolean} `true` if the input object or array is empty, `false` otherwise.
 */
export function isEmptyObjectOrArray(obj: Record<string, any> | any[]): boolean {
  if (!obj) {
    console.error('Invalid input: obj should be an object or an array.');
    return true;
  }

  if (Array.isArray(obj)) {
    return obj.length === 0;
  }

  return Object.keys(obj).length === 0;
}

/**
 * Finds the minimum and maximum values of a specified key in an array of objects.
 * @param {any[]} arr - An array of objects where each object has a property specified by the key parameter.
 * @param {string} key - The property name to be used for finding minimum and maximum values.
 * @returns {object} An object with two properties: "min" and "max". "min" represents the minimum value
 * found in the array of objects based on the specified key, and "max" represents the maximum value.
 */
export function findMinMaxValues(arr: any[], key: string): { min: any; max: any } {
  if (!Array.isArray(arr) || typeof key !== 'string') {
    console.error('Invalid input: arr should be an array of objects, and key should be a string.');
    return { min: null, max: null };
  }

  const values = arr.map((item) => item[key]);
  const min = Math.min(...values);
  const max = Math.max(...values);

  return { min, max };
}

/**
 * The function takes an array and returns a new array with each item assigned a percentage value based
 * on the length of the original array.
 * @param {any[]} arr - The parameter `arr` is an array of any type.
 * @returns The function `itemsWithPercentage` returns an array of objects. Each object in
 * the array has a `percentage` property that represents the divided percentage value based on the
 * length of the input array.
 */

export function itemsWithPercentage(arr: any[]) {
  const tempIterationsWithDividedPercentage = arr.map((item, index) => {
    if (index === arr.length - 1)
      return {
        ...item,
        percentage: 100 - (arr.length - 1) * Math.floor(+(100 / +arr.length)),
      };

    return {
      ...item,
      percentage: Math.floor(+(100 / +arr.length)),
    };
  });
  return tempIterationsWithDividedPercentage;
}
