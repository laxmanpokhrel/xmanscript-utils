'use strict';
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
    return t;
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.getMinMax =
  exports.formatNumberToCommaString =
  exports.uniqueValuesOfKey =
  exports.distributePercentageEquall =
  exports.countKeyOccurrences =
  exports.groupArrayOfObjectsByValueOfAKey =
  exports.parseToBoolean =
  exports.removeObjectFromArray =
  exports.getFileExtension =
  exports.intersectObjects =
  exports.splitArrayIntoChunks =
  exports.markCheckedByStringMatch =
  exports.distributePercentageEquallyWithRemainder =
  exports.convertNestedKeysToObject =
  exports.scrollToComponent =
  exports.setZeroValueForMatchingValuesOfAKey =
  exports.calculateSumOfKey =
  exports.calculateAndInjectPercentageBySum =
  exports.calculateAndInjectPercentageByMaxValue =
  exports.toggleObjectInArray =
  exports.toggleStringInArray =
  exports.setKeysToZeroInObjects =
  exports.setKeyToZeroInObjects =
  exports.omitKey =
  exports.abbreviateCurrencyValue =
  exports.areObjectsEqual =
  exports.objectToFormDataWithFiles =
  exports.isJSONObject =
  exports.containsBinaryData =
  exports.partitionObjectsByKey =
    void 0;
function partitionObjectsByKey(arr, key) {
  if (!Array.isArray(arr) || typeof key !== 'string') {
    console.error('Invalid input. Expected an array of objects and a string key.');
    return [[], []];
  }
  const withkey = [];
  const withoutKey = [];
  for (const element of arr) {
    if (element && typeof element === 'object') {
      const elementKeys = Object.keys(element);
      if (elementKeys.includes(key)) withkey.push(element);
      else withoutKey.push(element);
    } else {
      console.error('Invalid element encountered: ', element);
    }
  }
  return [withkey, withoutKey];
}
exports.partitionObjectsByKey = partitionObjectsByKey;
function containsBinaryData(obj) {
  function containsBinaryDataRecursive(object) {
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        const value = object[key];
        if (value instanceof Blob || value instanceof File || value instanceof ArrayBuffer) {
          return true;
        }
        if (typeof value === 'object' && containsBinaryDataRecursive(value)) {
          return true;
        }
      }
    }
    return false;
  }
  return containsBinaryDataRecursive(obj);
}
exports.containsBinaryData = containsBinaryData;
function isJSONObject(value) {
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
exports.isJSONObject = isJSONObject;
function objectToFormDataWithFiles(obj) {
  const formData = new FormData();
  const { file } = obj,
    rest = __rest(obj, ['file']);
  file.forEach((item) => {
    formData.append('file', item);
  });
  Object.keys(rest).forEach((key) => {
    const value = rest[key];
    if (Array.isArray(value) || isJSONObject(value)) formData.append(key, JSON.stringify(value));
    else formData.append(key, value);
  });
  return formData;
}
exports.objectToFormDataWithFiles = objectToFormDataWithFiles;
function areObjectsEqual(obj1, obj2) {
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
exports.areObjectsEqual = areObjectsEqual;
function abbreviateCurrencyValue(labelValue) {
  return Math.abs(Number(labelValue)) >= 1.0e9
    ? `${(Math.abs(Number(labelValue)) / 1.0e9).toFixed(1)} B`
    : Math.abs(Number(labelValue)) >= 1.0e6
    ? `${(Math.abs(Number(labelValue)) / 1.0e6).toFixed(1)} M`
    : Math.abs(Number(labelValue)) >= 1.0e3
    ? `${(Math.abs(Number(labelValue)) / 1.0e3).toFixed(1)} K`
    : Math.abs(Number(labelValue));
}
exports.abbreviateCurrencyValue = abbreviateCurrencyValue;
function omitKey(obj, key) {
  const _a = obj,
    _b = key,
    omitted = _a[_b],
    rest = __rest(_a, [typeof _b === 'symbol' ? _b : _b + '']);
  return rest;
}
exports.omitKey = omitKey;
function setKeyToZeroInObjects(arr, key) {
  if (typeof arr !== 'object') {
    console.error('Invalid array type.');
    return arr;
  }
  if (!key) return arr;
  const value = arr.map((obj) => {
    return Object.assign(Object.assign({}, obj), { [key]: 0 });
  });
  return value;
}
exports.setKeyToZeroInObjects = setKeyToZeroInObjects;
function setKeysToZeroInObjects(arr, keys) {
  if (!keys.length) return arr;
  return arr.map((obj) => {
    const newObj = Object.assign({}, obj);
    keys.forEach((key) => {
      newObj[key] = 0;
    });
    return newObj;
  });
}
exports.setKeysToZeroInObjects = setKeysToZeroInObjects;
function toggleStringInArray(arr, targetString) {
  const index = arr.indexOf(targetString);
  if (index !== -1) {
    arr.splice(index, 1);
  } else {
    arr.push(targetString);
  }
  return arr;
}
exports.toggleStringInArray = toggleStringInArray;
function toggleObjectInArray(arr, targetObject) {
  const index = arr.findIndex((obj) => areObjectsEqual(obj, targetObject));
  if (index !== -1) {
    arr.splice(index, 1);
  } else {
    arr.push(targetObject);
  }
  return arr;
}
exports.toggleObjectInArray = toggleObjectInArray;
function validateObjectsForKey(arr, key) {
  for (const obj of arr) {
    if (!obj.hasOwnProperty(key) || typeof obj[key] !== 'number' || isNaN(obj[key])) {
      console.error(`Invalid object encountered. Object:`, obj);
      throw new Error(`Object does not have a valid numeric "${key}" property.`);
    }
  }
  return true;
}
function calculateAndInjectPercentageByMaxValue(arr, key) {
  try {
    validateObjectsForKey(arr, 'value');
  } catch (error) {
    console.error(error.message);
    return arr;
  }
  const maxValue = Math.max(...arr.map((obj) => obj[key]));
  for (const obj of arr) {
    obj.percentage = parseFloat(((obj[key] / maxValue) * 100).toFixed(2));
  }
  return arr;
}
exports.calculateAndInjectPercentageByMaxValue = calculateAndInjectPercentageByMaxValue;
function calculateAndInjectPercentageBySum(arr, key) {
  try {
    validateObjectsForKey(arr, 'value');
  } catch (error) {
    console.error(error.message);
    return arr;
  }
  const sumOfValuesOfKey = arr.reduce((total, item) => total + (item[key] || 0), 0);
  for (const obj of arr) {
    obj.percentage = parseFloat(((obj[key] / sumOfValuesOfKey) * 100).toFixed(2));
  }
  return arr;
}
exports.calculateAndInjectPercentageBySum = calculateAndInjectPercentageBySum;
function calculateSumOfKey(data, key) {
  if (!data.length) return 0;
  return data.reduce((total, item) => total + (item[key] || 0), 0);
}
exports.calculateSumOfKey = calculateSumOfKey;
function setZeroValueForMatchingValuesOfAKey(arr, key, values) {
  return arr.map((item) => {
    if (values.includes(item[key])) {
      return Object.assign(Object.assign({}, item), { value: 0 });
    }
    return item;
  });
}
exports.setZeroValueForMatchingValuesOfAKey = setZeroValueForMatchingValuesOfAKey;
function scrollToComponent({ componentId, focusAfterScroll }) {
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
exports.scrollToComponent = scrollToComponent;
function convertNestedKeysToObject(input) {
  const output = {};
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
exports.convertNestedKeysToObject = convertNestedKeysToObject;
function distributePercentageEquallyWithRemainder(array) {
  const equalPartPercentage = Math.floor(100 / array.length);
  const remainingPercentage = 100 % array.length;
  const parts = [];
  for (let i = 0; i < array.length; i++) {
    const part = {
      percentage: +equalPartPercentage,
    };
    parts.push(part);
  }
  for (let i = 0; i < remainingPercentage; i++) {
    parts[i].percentage++;
  }
  return parts;
}
exports.distributePercentageEquallyWithRemainder = distributePercentageEquallyWithRemainder;
function markCheckedByStringMatch(objects, strings, chooseKey) {
  const x = objects.map((object) => {
    const chooseValue = object[chooseKey].toString();
    const checked = strings.includes(chooseValue);
    return Object.assign(Object.assign({}, object), { checked });
  });
  return x;
}
exports.markCheckedByStringMatch = markCheckedByStringMatch;
function splitArrayIntoChunks(array, size) {
  return array.reduce((acc, current) => {
    if (acc.length === 0 || acc[acc.length - 1].length === size) {
      acc.push([current]);
    } else {
      acc[acc.length - 1].push(current);
    }
    return acc;
  }, []);
}
exports.splitArrayIntoChunks = splitArrayIntoChunks;
function intersectObjects(obj1, obj2) {
  const obj2Keys = Object.keys(obj2);
  if (!obj2Keys.length) return {};
  const intersectedObj = obj2Keys.reduce((acc, item) => {
    if (obj1[item]) acc[item] = obj1[item];
    return acc;
  }, {});
  return intersectedObj;
}
exports.intersectObjects = intersectObjects;
function getFileExtension(url) {
  if (!url) return '';
  const lastDotIndex = url.lastIndexOf('.');
  if (lastDotIndex === -1) {
    return null;
  }
  const extension = url.slice(lastDotIndex + 1);
  return extension.toLowerCase();
}
exports.getFileExtension = getFileExtension;
function removeObjectFromArray(objects, object) {
  const index = objects.findIndex((item) => JSON.stringify(item) === JSON.stringify(object));
  if (index < 0) return objects;
  const result = [...objects.slice(0, index), ...objects.slice(index + 1)];
  return result;
}
exports.removeObjectFromArray = removeObjectFromArray;
function parseToBoolean(val) {
  if (val === 'true') return true;
  if (val === 'false') return false;
  console.error('String cannot be parsed to boolean.', val);
  return undefined;
}
exports.parseToBoolean = parseToBoolean;
function groupArrayOfObjectsByValueOfAKey(arr, key) {
  const groupedArrays = {};
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
exports.groupArrayOfObjectsByValueOfAKey = groupArrayOfObjectsByValueOfAKey;
function countKeyOccurrences(json, key) {
  let count = 0;
  if (typeof json === 'object' && !Array.isArray(json)) {
    const keys = Object.keys(json);
    if (keys.includes(key)) count++;
    keys.forEach((k) => {
      count += countKeyOccurrences(json[k], key);
    });
  }
  if (Array.isArray(json)) {
    json.forEach((item) => {
      count += countKeyOccurrences(item, key);
    });
  }
  return count;
}
exports.countKeyOccurrences = countKeyOccurrences;
function distributePercentageEquall(json, key) {
  const count = countKeyOccurrences(json, key);
  function updatePercentage(obj) {
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
      const percentageArray = obj.filter((item) => typeof item === 'object' && key in item);
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
exports.distributePercentageEquall = distributePercentageEquall;
function uniqueValuesOfKey(data, key) {
  if (!Array.isArray(data) || typeof key !== 'string') {
    console.error('Invalid input: data should be an array of objects, and key should be a string.');
    return [];
  }
  const uniqueValues = new Set();
  for (const item of data) {
    if (item.hasOwnProperty(key) && typeof item[key] === 'string') {
      uniqueValues.add(item[key]);
    }
  }
  return Array.from(uniqueValues);
}
exports.uniqueValuesOfKey = uniqueValuesOfKey;
function formatNumberToCommaString(value) {
  if (typeof value !== 'number') {
    console.error('Invalid input: value should be a number.');
    return '';
  }
  return Math.round(value).toLocaleString('en-US');
}
exports.formatNumberToCommaString = formatNumberToCommaString;
function getMinMax(arr, key) {
  if (!Array.isArray(arr) || typeof key !== 'string') {
    console.error('Invalid input: arr should be an array of objects, and key should be a string.');
    return { min: null, max: null };
  }
  const values = arr.map((item) => item[key]);
  const min = Math.min(...values);
  const max = Math.max(...values);
  return { min, max };
}
exports.getMinMax = getMinMax;
//# sourceMappingURL=utils.js.map
