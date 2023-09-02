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
exports.itemsWithPercentage =
  exports.findMinMaxValues =
  exports.isEmptyObjectOrArray =
  exports.formatNumberWithCommas =
  exports.removeValueFromArray =
  exports.filterObjectsByKeyAndValue =
  exports.extractUniqueValuesByKey =
  exports.dividePercentage =
  exports.countKeyInJSON =
  exports.groupArrayOfObjectsByValueOfAKey =
  exports.parseToBollean =
  exports.splitArrayByIteratorId =
  exports.removeObjectFromArrayOfObjects =
  exports.getFileExtension =
  exports.IntersectionOfObjects =
  exports.getPercentage =
  exports.splitArrayToMultipleArrayOfSize =
  exports.addCheckedFieldByString =
  exports.dividePercentageIntoEqualParts =
  exports.removeObjectAtIndex =
  exports.convertObject =
  exports.replaceObjectAtPosition =
  exports.scrollToComponent =
  exports.setZeroValueForObjectsWithKeyValues =
  exports.getSumOfKey =
  exports.calculatePercentageAndInjectValue =
  exports.calculatePercentage =
  exports.removeOrAddObjectFromArray =
  exports.removeOrAddStringFromArray =
  exports.assignZeroToKeys =
  exports.assignZeroToKey =
  exports.removeKeyFromObject =
  exports.convertToCurrencySystem =
  exports.objectsEqual =
  exports.jsonToFormData =
  exports.isJSONObject =
  exports.hasBinaryData =
    void 0;
function hasBinaryData(obj) {
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
exports.hasBinaryData = hasBinaryData;
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
function jsonToFormData(obj) {
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
exports.jsonToFormData = jsonToFormData;
function objectsEqual(obj1, obj2) {
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
exports.objectsEqual = objectsEqual;
function convertToCurrencySystem(labelValue) {
  return Math.abs(Number(labelValue)) >= 1.0e9
    ? `${(Math.abs(Number(labelValue)) / 1.0e9).toFixed(1)} B`
    : Math.abs(Number(labelValue)) >= 1.0e6
    ? `${(Math.abs(Number(labelValue)) / 1.0e6).toFixed(1)} M`
    : Math.abs(Number(labelValue)) >= 1.0e3
    ? `${(Math.abs(Number(labelValue)) / 1.0e3).toFixed(1)} K`
    : Math.abs(Number(labelValue));
}
exports.convertToCurrencySystem = convertToCurrencySystem;
function removeKeyFromObject(obj, key) {
  const _a = obj,
    _b = key,
    omitted = _a[_b],
    rest = __rest(_a, [typeof _b === 'symbol' ? _b : _b + '']);
  return rest;
}
exports.removeKeyFromObject = removeKeyFromObject;
function assignZeroToKey(arr, key) {
  if (!key) return arr;
  const value = arr.map((obj) => {
    return Object.assign(Object.assign({}, obj), { [key]: 0 });
  });
  return value;
}
exports.assignZeroToKey = assignZeroToKey;
function assignZeroToKeys(arr, keys) {
  if (!keys.length) return arr;
  return arr.map((obj) => {
    const newObj = Object.assign({}, obj);
    keys.forEach((key) => {
      newObj[key] = 0;
    });
    return newObj;
  });
}
exports.assignZeroToKeys = assignZeroToKeys;
function removeOrAddStringFromArray(arr, targetString) {
  const index = arr.indexOf(targetString);
  if (index !== -1) {
    arr.splice(index, 1);
  } else {
    arr.push(targetString);
  }
  return arr;
}
exports.removeOrAddStringFromArray = removeOrAddStringFromArray;
function isEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}
function removeOrAddObjectFromArray(arr, targetObject) {
  const index = arr.findIndex((obj) => isEqual(obj, targetObject));
  if (index !== -1) {
    arr.splice(index, 1);
  } else {
    arr.push(targetObject);
  }
  return arr;
}
exports.removeOrAddObjectFromArray = removeOrAddObjectFromArray;
function calculatePercentage(total, value) {
  if (!total || !value) return 0;
  if (total === 0) {
    return 0;
  }
  return (value / total) * 100;
}
exports.calculatePercentage = calculatePercentage;
function calculatePercentageAndInjectValue(arr, key) {
  const maxValue = Math.max(...arr.map((obj) => obj[key]));
  for (const obj of arr) {
    obj.percentage = parseFloat(((obj[key] / maxValue) * 100).toFixed(2));
  }
  return arr;
}
exports.calculatePercentageAndInjectValue = calculatePercentageAndInjectValue;
function getSumOfKey(data, key) {
  if (data.length === 0) {
    return 0;
  }
  const total = data
    .map((item) => item[key])
    .reduce((sum, item) => {
      const y = sum + +item;
      return y;
    });
  return total;
}
exports.getSumOfKey = getSumOfKey;
function setZeroValueForObjectsWithKeyValues(arr, key, values) {
  return arr.map((item) => {
    if (values.includes(item[key])) {
      return Object.assign(Object.assign({}, item), { value: 0 });
    }
    return item;
  });
}
exports.setZeroValueForObjectsWithKeyValues = setZeroValueForObjectsWithKeyValues;
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
function replaceObjectAtPosition(arr, position, newObj) {
  if (position < 0 || position >= arr.length) {
    throw new Error('Invalid position');
  }
  const newArray = [...arr];
  newArray[position] = newObj;
  return newArray;
}
exports.replaceObjectAtPosition = replaceObjectAtPosition;
function convertObject(input) {
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
exports.convertObject = convertObject;
function removeObjectAtIndex(array, index) {
  if (index < 0 || index >= array.length) {
    return array;
  }
  const newArray = [...array.slice(0, index), ...array.slice(index + 1)];
  return newArray;
}
exports.removeObjectAtIndex = removeObjectAtIndex;
function dividePercentageIntoEqualParts(array) {
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
exports.dividePercentageIntoEqualParts = dividePercentageIntoEqualParts;
function addCheckedFieldByString(objects, strings, chooseKey) {
  const x = objects.map((object) => {
    const chooseValue = object[chooseKey].toString();
    const checked = strings.includes(chooseValue);
    return Object.assign(Object.assign({}, object), { checked });
  });
  return x;
}
exports.addCheckedFieldByString = addCheckedFieldByString;
function splitArrayToMultipleArrayOfSize(array, size) {
  return array.reduce((acc, current) => {
    if (acc.length === 0 || acc[acc.length - 1].length === size) {
      acc.push([current]);
    } else {
      acc[acc.length - 1].push(current);
    }
    return acc;
  }, []);
}
exports.splitArrayToMultipleArrayOfSize = splitArrayToMultipleArrayOfSize;
function getPercentage(x, y) {
  return (x / y) * 100;
}
exports.getPercentage = getPercentage;
function IntersectionOfObjects(obj1, obj2) {
  const obj2Keys = Object.keys(obj2);
  if (!obj2Keys.length) return {};
  const intersectedObj = obj2Keys.reduce((acc, item) => {
    if (obj1[item]) acc[item] = obj1[item];
    return acc;
  }, {});
  return intersectedObj;
}
exports.IntersectionOfObjects = IntersectionOfObjects;
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
function removeObjectFromArrayOfObjects(objects, object) {
  const index = objects.findIndex((item) => JSON.stringify(item) === JSON.stringify(object));
  if (index < 0) return objects;
  const result = removeObjectAtIndex(objects, index);
  return result;
}
exports.removeObjectFromArrayOfObjects = removeObjectFromArrayOfObjects;
function splitArrayByIteratorId(arr) {
  const withIteratorId = [];
  const withoutIteratorId = [];
  for (const item of arr) {
    if (item.iteratorId) {
      withIteratorId.push(item);
    } else {
      withoutIteratorId.push(item);
    }
  }
  return [withIteratorId, withoutIteratorId];
}
exports.splitArrayByIteratorId = splitArrayByIteratorId;
function parseToBollean(val) {
  if (val === 'true') return true;
  return false;
}
exports.parseToBollean = parseToBollean;
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
function countKeyInJSON(json, key) {
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
exports.countKeyInJSON = countKeyInJSON;
function dividePercentage(json, key) {
  const count = countKeyInJSON(json, key);
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
exports.dividePercentage = dividePercentage;
function extractUniqueValuesByKey(data, key) {
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
exports.extractUniqueValuesByKey = extractUniqueValuesByKey;
function filterObjectsByKeyAndValue(array, key, value) {
  if (!Array.isArray(array) || typeof key !== 'string') {
    console.error('Invalid input: array should be an array of objects, and key should be a string.');
    return [];
  }
  return array.filter((item) => item[key] === value);
}
exports.filterObjectsByKeyAndValue = filterObjectsByKeyAndValue;
function removeValueFromArray(arr, value) {
  if (!Array.isArray(arr)) {
    console.error('Invalid input: arr should be an array of strings.');
    return [];
  }
  return arr.filter((item) => item !== value);
}
exports.removeValueFromArray = removeValueFromArray;
function formatNumberWithCommas(value) {
  if (typeof value !== 'number') {
    console.error('Invalid input: value should be a number.');
    return '';
  }
  return Math.round(value).toLocaleString('en-US');
}
exports.formatNumberWithCommas = formatNumberWithCommas;
function isEmptyObjectOrArray(obj) {
  if (!obj) {
    console.error('Invalid input: obj should be an object or an array.');
    return true;
  }
  if (Array.isArray(obj)) {
    return obj.length === 0;
  }
  return Object.keys(obj).length === 0;
}
exports.isEmptyObjectOrArray = isEmptyObjectOrArray;
function findMinMaxValues(arr, key) {
  if (!Array.isArray(arr) || typeof key !== 'string') {
    console.error('Invalid input: arr should be an array of objects, and key should be a string.');
    return { min: null, max: null };
  }
  const values = arr.map((item) => item[key]);
  const min = Math.min(...values);
  const max = Math.max(...values);
  return { min, max };
}
exports.findMinMaxValues = findMinMaxValues;
function itemsWithPercentage(arr) {
  const tempIterationsWithDividedPercentage = arr.map((item, index) => {
    if (index === arr.length - 1)
      return Object.assign(Object.assign({}, item), {
        percentage: 100 - (arr.length - 1) * Math.floor(+(100 / +arr.length)),
      });
    return Object.assign(Object.assign({}, item), { percentage: Math.floor(+(100 / +arr.length)) });
  });
  return tempIterationsWithDividedPercentage;
}
exports.itemsWithPercentage = itemsWithPercentage;
//# sourceMappingURL=utils.js.map
