## `splitArrayByIteratorId` Function

The `splitArrayByIteratorId` function splits an array of objects into two separate arrays based on whether each object has an `iteratorId` property.

### Parameters
- `arr` (Type: `Record<string, any>[]`): An array of objects, where each object has a string key and any value.

### Returns
- `[Record<string, any>[], Record<string, any>[]]`: Returns an array containing two elements. The first element is an array of objects that have the property `iteratorId`, and the second element is an array of objects that do not have the property `iteratorId`.

### Example Usage
```typescript
import { splitArrayByIteratorId } from 'lxu-utils';

const array = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob', iteratorId: 'x1' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'David', iteratorId: 'x2' },
];

const [withIteratorId, withoutIteratorId] = splitArrayByIteratorId(array);

console.log(withIteratorId);
// Result: [
//   { id: 2, name: 'Bob', iteratorId: 'x1' },
//   { id: 4, name: 'David', iteratorId: 'x2' },
// ]

console.log(withoutIteratorId);
// Result: [
//   { id: 1, name: 'Alice' },
//   { id: 3, name: 'Charlie' },
// ]
```
## `convertObject` Function

The `convertObject` function converts an input object with nested keys in the format of "name[index].nestedKey" into an output object with nested arrays and objects.

### Parameters
- `input` (Type: `Record<string, any>`): A JavaScript object with string keys and any values.

### Returns
- `any`: Returns an object with the converted input. The input is an object with string keys and any values. The function converts any keys that match the pattern of "name[index].nestedKey" into nested objects within an array. The function returns the converted object.

### Example Usage
```typescript
import { convertObject } from 'lxu-utils';

const input = {
  'user[0].name': 'Alice',
  'user[0].age': 30,
  'user[1].name': 'Bob',
  'user[1].age': 25,
  'status': 'active',
};

const convertedObject = convertObject(input);

// Result:
// {
//   user: [
//     { name: 'Alice', age: 30 },
//     { name: 'Bob', age: 25 },
//   ],
//   status: 'active',
// }
```

## `addCheckedFieldByString` Function

The `addCheckedFieldByString` function adds a "checked" field to each object in an array based on whether a corresponding string value is included in another array.

### Parameters
- `objects` (Type: `T[]`): An array of objects of type `T`.
- `strings` (Type: `string[]`): An array of strings to be used for checking against the values of the `chooseKey` property in each object.
- `chooseKey` (Type: `keyof T`): The key of the property in the objects that you want to compare with the `strings` array. It can be any valid key of the objects in the `objects` array.

### Returns
- `T[]`: Returns an array of objects of type `T` with an additional `checked` field.

### Example Usage
```typescript
import { addCheckedFieldByString } from 'lxu-utils';

interface Item {
  id: number;
  name: string;
}

const items: Item[] = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Cherry' },
];

const selectedItems: string[] = ['Banana', 'Cherry'];

const itemsWithCheckedField = addCheckedFieldByString(items, selectedItems, 'name');

// Result:
// [
//   { id: 1, name: 'Apple', checked: false },
//   { id: 2, name: 'Banana', checked: true },
//   { id: 3, name: 'Cherry', checked: true },
// ]
```

## `intersectObjects` Function

The `intersectObjects` function takes two objects as input and returns a new object containing only the properties that exist in both input objects.

### Parameters
- `obj1` (Type: `Record<string, any>`): An object that can have any number of properties of any type.
- `obj2` (Type: `Record<string, any>`): A record object that contains key-value pairs.

### Returns
- `Record<string, any>`: Returns a new object that contains the intersection of properties between `obj1` and `obj2`.

### Example Usage
```typescript
import { intersectObjects } from 'lxu-utils';

const object1 = {
  name: 'John',
  age: 30,
  country: 'USA',
};

const object2 = {
  age: 30,
  city: 'New York',
};

const intersection = intersectObjects(object1, object2);

// Result: { age: 30 }
```


## `hasBinaryData` Function

The `hasBinaryData` function checks if an object contains binary data by recursively iterating through its properties.

### Parameters
- `obj` (Type: `Record<string, any>`): The object to check for binary data. It should have string keys and values of any type.

### Returns
- `boolean`: Returns `true` if binary data (Blob, File, or ArrayBuffer) is found within the object or its nested properties. Otherwise, it returns `false`.

### Example Usage
```typescript
import { hasBinaryData } from 'lxu-utils';

const obj1 = {
  name: 'John',
  image: new Blob([new ArrayBuffer(1024)]),
};

const obj2 = {
  name: 'Alice',
  details: {
    profilePic: new File(['data'], 'profile.jpg'),
  },
};

console.log(hasBinaryData(obj1)); // true
console.log(hasBinaryData(obj2)); // true
``````


## `isJSONObject` Function

The `isJSONObject` function checks if a given string is a valid JSON object.

### Parameters
- `value` (Type: `string`): The string to validate as a JSON object.

### Returns
- `boolean`: Returns `true` if the input string represents a valid JSON object, and `false` otherwise.

### Example Usage
```typescript
import { isJSONObject } from 'lxu-utils';

const jsonString1 = '{"name": "John", "age": 30}';
const jsonString2 = 'This is not a JSON object';

console.log(isJSONObject(jsonString1)); // true
console.log(isJSONObject(jsonString2)); // false
```

## `jsonToFormData` Function

The `jsonToFormData` function converts a JSON object into a FormData object, handling file uploads and nested objects.

### Parameters
- `obj` (Type: `Record<string, any>`): The object containing key-value pairs. The keys represent the names of the form fields, and the values represent the corresponding values for those fields. Values can be of any type, including strings, numbers, booleans, arrays, or objects.

### Returns
- `FormData`: Returns a FormData object representing the converted data.

### Example Usage
```typescript
import { jsonToFormData } from 'lxu-utils';

const formData = jsonToFormData({
  name: 'John',
  age: 30,
  file: [new File(['data'], 'profile.jpg')],
  address: {
    street: '123 Main St',
    city: 'New York',
  },
});

// Use `formData` in a fetch request or form submission.
```

## `objectsEqual` Function

The `objectsEqual` function checks if two objects are equal by comparing their keys and values.

### Parameters
- `obj1` (Type: `any`): The first object to compare.
- `obj2` (Type: `any`): The second object to compare with `obj1` to check if they are equal.

### Returns
- `boolean`: Returns `true` if the two objects are equal (have the same keys and corresponding values), and `false` otherwise.

### Example Usage
```typescript
import { objectsEqual } from 'lxu-utils';

const obj1 = { name: 'John', age: 30 };
const obj2 = { age: 30, name: 'John' };
const obj3 = { name: 'Alice', age: 25 };

console.log(objectsEqual(obj1, obj2)); // true
console.log(objectsEqual(obj1, obj3)); // false
```
## `convertToCurrencySystem` Function

The `convertToCurrencySystem` function converts a number into a currency system by abbreviating it with "B" for billions, "M" for millions, and "K" for thousands.

### Parameters
- `labelValue` (Type: `number`): The number to convert into a currency system. It represents a value in the currency system.

### Returns
- `string | number`: Returns a string if the number is in the currency system (e.g., "1.5 B", "7.5 M", "2.5 K"), and returns a number if it's not in the specified range.

### Example Usage
```typescript
import { convertToCurrencySystem } from 'lxu-utils';

const value1 = 1500000000; // 1.5 billion
const value2 = 7500000;    // 7.5 million
const value3 = 2500;       // 2.5 thousand
const value4 = 42;         // 42

console.log(convertToCurrencySystem(value1)); // "1.5 B"
console.log(convertToCurrencySystem(value2)); // "7.5 M"
console.log(convertToCurrencySystem(value3)); // "2.5 K"
console.log(convertToCurrencySystem(value4)); // 42
```

## `removeKeyFromObject` Function

The `removeKeyFromObject` function removes a specified key from an object and returns a new object without that key.

### Parameters
- `obj` (Type: `T`): The object from which you want to remove a key. It can be of any type `T`.
- `key` (Type: `K`): The key of the property to remove from the object. It should be a valid key of the object's type `T`.

### Returns
- `Omit<T, K>`: Returns an object of type `Omit<T, K>`, which is the original object `obj` with the specified `key` removed.

### Example Usage
```typescript
import { removeKeyFromObject } from 'lxu-utils';

const user = {
  id: 1,
  name: 'John',
  age: 30,
};

const userWithoutId = removeKeyFromObject(user, 'id');

// Result: { name: 'John', age: 30 }
```

## `assignZeroToKey` Function

The `assignZeroToKey` function assigns the value of zero to a specified key in each object of an array.

### Parameters
- `arr` (Type: `Record<string, any>[]`): An array of objects with string keys and any values.
- `key` (Type: `string`): The key in each object of the `arr` array to which you want to assign the value of zero.

### Returns
- `Record<string, any>[]`: Returns an array of objects where the specified key is assigned the value of zero.

### Example Usage
```typescript
import { assignZeroToKey } from 'lxu-utils';

const data = [
  { id: 1, value: 10 },
  { id: 2, value: 20 },
  { id: 3, value: 30 },
];

const newData = assignZeroToKey(data, 'value');

// Result: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }]
```

## `assignZeroToKeys` Function

The `assignZeroToKeys` function takes an array of objects and an array of keys, and returns a new array of objects where the specified keys are assigned the value of zero.

### Parameters
- `arr` (Type: `Record<string, any>[]`): An array of objects, where each object represents a record with key-value pairs.
- `keys` (Type: `string[]`): An array of strings representing the keys that need to be assigned the value of zero in each object in the array.

### Returns
- `Record<string, any>[]`: Returns an array of objects where the specified keys are assigned the value of zero.

### Example Usage
```typescript
import { assignZeroToKeys } from 'lxu-utils';

const data = [
  { id: 1, value1: 10, value2: 20 },
  { id: 2, value1: 30, value2: 40 },
];

const newData = assignZeroToKeys(data, ['value1', 'value2']);

// Result: [
//   { id: 1, value1: 0, value2: 0 },
//   { id: 2, value1: 0, value2: 0 },
// ]
```

## `removeOrAddStringFromArray` Function

The `removeOrAddStringFromArray` function removes the target string from the array if it exists, otherwise, it adds the target string to the array.

### Parameters
- `arr` (Type: `string[]`): An array of strings.
- `targetString` (Type: `string`): The string that you want to either remove from the array or add to the array.

### Returns
- `string[]`: Returns an array of strings after the operation. If the target string existed, it is removed; if not, it is added.

### Example Usage
```typescript
import { removeOrAddStringFromArray } from 'lxu-utils';

const myArray = ['apple', 'banana', 'cherry'];

// Remove 'banana' from the array
const newArray1 = removeOrAddStringFromArray(myArray, 'banana');
// Result: ['apple', 'cherry']

// Add 'strawberry' to the array
const newArray2 = removeOrAddStringFromArray(myArray, 'strawberry');
// Result: ['apple', 'banana', 'cherry', 'strawberry']
```

## `removeOrAddObjectFromArray` Function

The `removeOrAddObjectFromArray` function removes the target object from the array if it exists, otherwise, it adds it to the array. The equality comparison is done using the `isEqual` function.

### Parameters
- `arr` (Type: `T[]`): An array of objects of type `T`.
- `targetObject` (Type: `T`): The object that you want to either remove from the array if it exists or add to the array if it doesn't exist.

### Returns
- `T[]`: Returns the updated array after either removing or adding the target object.

### Example Usage
```typescript
import { removeOrAddObjectFromArray } from 'lxu-utils';

const data = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

// Remove the object with id: 2
const updatedData1 = removeOrAddObjectFromArray(data, { id: 2, name: 'Bob' });
// Result: [{ id: 1, name: 'Alice' }]

// Add a new object
const updatedData2 = removeOrAddObjectFromArray(data, { id: 3, name: 'Charlie' });
// Result: [{ id: 1, name: 'Alice' }, { id: 3, name: 'Charlie' }]
```

## `calculatePercentage` Function

The `calculatePercentage` function calculates the percentage of a value in relation to a total.

### Parameters
- `total` (Type: `number`): The total number or quantity that the `value` is being compared to.
- `value` (Type: `number`): The numerical value that you want to calculate the percentage of.

### Returns
- `number`: Returns a number, which is the percentage calculated based on the `total` and `value` parameters passed to the function. If the `total` parameter is 0, the function returns 0.

### Example Usage
```typescript
import { calculatePercentage } from 'lxu-utils';

const total = 100;
const value = 25;

const percentage = calculatePercentage(total, value);

// Result: 25

```
## `calculatePercentageAndInjectValue` Function

The `calculatePercentageAndInjectValue` function calculates the percentage of a specific key's value in each object of an array and injects the percentage value into each object.

### Parameters
- `arr` (Type: `Record<string, any>[]`): An array of objects. Each object represents a data entry and contains various properties.
- `key` (Type: `string`): The string representing the key or property name in each object of the `arr` array. This key is used to access the corresponding value in each object for calculating the percentage.

### Returns
- `Record<string, any>[]`: Returns the modified array `arr` with an additional `percentage` property added to each object.

### Example Usage
```typescript
import { calculatePercentageAndInjectValue } from 'lxu-utils';

const data = [
  { name: 'A', value: 50 },
  { name: 'B', value: 75 },
  { name: 'C', value: 100 },
];

const newData = calculatePercentageAndInjectValue(data, 'value');

// Result:
// [
//   { name: 'A', value: 50, percentage: 33.33 },
//   { name: 'B', value: 75, percentage: 50.0 },
//   { name: 'C', value: 100, percentage: 66.67 },
// ]
```
## `getSumOfKey` Function

The `getSumOfKey` function calculates the sum of a specified key in an array of objects.

### Parameters
- `data` (Type: `Record<string, any>[]`): An array of objects where each object has one or more key-value pairs.
- `key` (Type: `string`): A string representing the key of the property in each object of the `data` array that you want to sum up.

### Returns
- `number`: Returns the sum of the values of the specified `key` in an array of objects. If the array is empty, it returns 0.

### Example Usage
```typescript
import { getSumOfKey } from 'lxu-utils';

const data = [
  { value: 10 },
  { value: 20 },
  { value: 30 },
];

const total = getSumOfKey(data, 'value');

// Result: 60
```
## `setZeroValueForObjectsWithKeyValues` Function

The `setZeroValueForObjectsWithKeyValues` function changes the 'value' property of objects in an array if their specified key-value pair matches the provided values. The 'value' property of matching objects will be set to zero.

### Parameters
- `arr` (Type: `Record<string, any>[]`): An array of objects where each object has key-value pairs.
- `key` (Type: `string`): A string representing the key or property name of the object in the array that you want to check for a specific value.
- `values` (Type: `any[]`): An array of values to be matched against the value of the specified key in each object. Objects with matching key-value pairs will have their 'value' property set to zero.

### Returns
- `Record<string, any>[]`: Returns the modified array where the 'value' property of matching objects is set to zero.

### Example Usage
```typescript
import { setZeroValueForObjectsWithKeyValues } from 'lxu-utils';

const data = [
  { name: 'A', value: 'x' },
  { name: 'B', value: 'y' },
  { name: 'C', value: 'x' },
];

const modifiedData = setZeroValueForObjectsWithKeyValues(data, 'value', ['x']);

// Result:
// [
//   { name: 'A', value: 0 },
//   { name: 'B', value: 'y' },
//   { name: 'C', value: 0 },
// ]
```
## `scrollToComponent` Function

The `scrollToComponent` function scrolls to a specified component on the page and optionally focuses on it after scrolling.

### Parameters
- `props` (Type: `scrollToComponentProps`): An object with two properties:
  - `componentId` (Type: `string`): The id of the component to scroll to.
  - `focusAfterScroll` (Type: `boolean`): A boolean indicating whether to focus on the component after scrolling.

### Returns
- No return value.

### Example Usage
```typescript
import { scrollToComponent } from 'lxu-utils';

// Scroll to component with id "myComponent" and focus on it after scrolling.
scrollToComponent({ componentId: 'myComponent', focusAfterScroll: true });
```

## `replaceObjectAtPosition` Function

The `replaceObjectAtPosition` function replaces an object at a specified position in an array and returns a new array.

### Parameters
- `arr` (Type: `T[]`): An array of type `T`, which represents the original array where the object needs to be replaced.
- `position` (Type: `number`): The index at which the `newObj` should replace the existing object in the `arr` array.
- `newObj` (Type: `T`): The new object that you want to replace at the specified position in the array.

### Returns
- `T[]`: Returns a new array with the object at the specified position replaced with the new object.

### Example Usage
```typescript
import { replaceObjectAtPosition } from 'lxu-utils';

const data = [1, 2, 3, 4, 5];
const newData = replaceObjectAtPosition(data, 2, 99);

// Result: [1, 2, 99, 4, 5]
```

## `removeObjectAtIndex` Function

The `removeObjectAtIndex` function removes an object from an array at a specified index and returns a new array.

### Parameters
- `array` (Type: `T[]`): An array of elements of type `T`.
- `index` (Type: `number`): A number that represents the position of the object to be removed from the array. It should be a non-negative integer that is less than the length of the array.

### Returns
- `T[]`: Returns a new array with the object at the specified index removed. If the index is out of bounds, the function returns the original array.

### Example Usage
```typescript
import { removeObjectAtIndex } from 'lxu-utils';

const originalArray = [1, 2, 3, 4, 5];
const newArray = removeObjectAtIndex(originalArray, 2);

// Result: [1, 2, 4, 5] (Element 3 removed)
```

## `dividePercentageIntoEqualParts` Function

The `dividePercentageIntoEqualParts` function divides a given percentage into equal parts and distributes any remaining percentage across the parts.

### Parameters
- `array` (Type: `Record<string, any>[]`): An array of objects, where each object represents a part that needs to be divided into equal parts. Each object should have a `percentage` property.

### Returns
- `Record<string, any>[]`: Returns an array of objects, where each object represents a part and contains a `percentage` property.

### Example Usage
```typescript
import { dividePercentageIntoEqualParts } from 'lxu-utils';

const partsToDivide = [
  { percentage: 30 },
  { percentage: 20 },
  { percentage: 25 },
];

const dividedParts = dividePercentageIntoEqualParts(partsToDivide);

// Result: [{ percentage: 33 }, { percentage: 33 }, { percentage: 34 }]
```

## `splitArrayToMultipleArrayOfSize` Function

The `splitArrayToMultipleArrayOfSize` function splits an array into multiple arrays of a specified size.

### Parameters
- `array` (Type: `Record<string, any>[]`): An array of objects, where each object has string keys and any values.
- `size` (Type: `number`): The desired size of each subarray. It determines how many elements should be included in each subarray when splitting the original array.

### Returns
- `Record<string, any>[][]`: Returns an array of arrays. Each inner array contains a subset of the original array, with each subset having a maximum size specified by the `size` parameter.

### Example Usage
```typescript
import { splitArrayToMultipleArrayOfSize } from 'lxu-utils';

const originalArray = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  { id: 4, name: 'Item 4' },
  { id: 5, name: 'Item 5' },
];

const subarrays = splitArrayToMultipleArrayOfSize(originalArray, 2);

// Result:
// [
//   [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }],
//   [{ id: 3, name: 'Item 3' }, { id: 4, name: 'Item 4' }],
//   [{ id: 5, name: 'Item 5' }],
// ]
```

## `getPercentage` Function

The `getPercentage` function calculates the percentage of one number in relation to another number.

### Parameters
- `x` (Type: `number`): The numerator in a fraction.
- `y` (Type: `number`): The denominator or total value in a fraction.

### Returns
- `number`: Returns the percentage of `x` in relation to `y`.

### Example Usage
```typescript
import { getPercentage } from 'lxu-utils';

const numerator = 25;
const denominator = 100;

const percentage = getPercentage(numerator, denominator);

// Result: 25 (since 25% of 100 is 25)
```

## `getFileExtension` Function

The `getFileExtension` function takes a URL as input and returns the file extension of the URL as a lowercase string. If the URL is undefined or empty, it returns an empty string. If no file extension is found in the URL, it returns null.

### Parameters
- `url` (Type: `string | undefined`): A string that represents the URL of a file.

### Returns
- `string | null`: Returns the file extension of the given URL as a lowercase string. If the URL is undefined or empty, an empty string is returned. If no file extension is found in the URL, null is returned.

### Example Usage
```typescript
import { getFileExtension } from 'lxu-utils';

const url1 = 'https://example.com/image.jpg';
const url2 = 'https://example.com/document.pdf';
const url3 = 'https://example.com/file-without-extension';

const extension1 = getFileExtension(url1); // Result: 'jpg'
const extension2 = getFileExtension(url2); // Result: 'pdf'
const extension3 = getFileExtension(url3); // Result: null
const extension4 = getFileExtension(undefined); // Result: ''
```

## `removeObjectFromArrayOfObjects` Function

The `removeObjectFromArrayOfObjects` function removes a specified object from an array of objects based on a deep comparison.

### Parameters
- `objects` (Type: `Record<string, any>[]`): An array of objects.
- `object` (Type: `Record<string, any>`): The object that you want to remove from the `objects` array.

### Returns
- `Record<string, any>[]`: Returns the updated array after removing the specified object. If the object is not found in the array, the original array is returned unchanged.

### Example Usage
```typescript
import { removeObjectFromArrayOfObjects } from 'lxu-utils';

const array = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

const objectToRemove = { id: 2, name: 'Bob' };

const updatedArray = removeObjectFromArrayOfObjects(array, objectToRemove);

console.log(updatedArray);
// Result: [
//   { id: 1, name: 'Alice' },
//   { id: 3, name: 'Charlie' },
// ]
```

## `parseToBoolean` Function

The `parseToBoolean` function takes a string value and returns a boolean value based on whether the string is equal to "true."

### Parameters
- `val` (Type: `string`): A string that represents a boolean value.

### Returns
- `boolean`: Returns a boolean value. If the input string is equal to 'true', it will return true. Otherwise, it will return false.

### Example Usage
```typescript
import { parseToBoolean } from 'lxu-utils';

const result1 = parseToBoolean('true');
// Result: true

const result2 = parseToBoolean('false');
// Result: false

```


## `groupArrayOfObjectsByValueOfAKey` Function

The `groupArrayOfObjectsByValueOfAKey` function takes an array of objects and a key, and groups the objects based on the similarity of their values for that key.

### Parameters
- `arr` (Type: `Record<string, any>[]`): An array of objects. Each object in the array has properties with key-value pairs.
- `key` (Type: `string`): The `key` parameter is a string that represents the key in each object of the `arr` array that will be used to group the objects.

### Returns
- `Record<string, any>[][]`: Returns an array of arrays. Each inner array contains objects from the input array `arr` that have the same value for the specified `key`.

### Example Usage
```typescript
import { groupArrayOfObjectsByValueOfAKey } from 'lxu-utils';

const data = [
  { category: 'A', value: 1 },
  { category: 'B', value: 2 },
  { category: 'A', value: 3 },
  { category: 'C', value: 4 },
];

const groupedData = groupArrayOfObjectsByValueOfAKey(data, 'category');
// Result: [ [{ category: 'A', value: 1 }, { category: 'A', value: 3 }], [{ category: 'B', value: 2 }], [{ category: 'C', value: 4 }] ]
```


## `countKeyInJSON` Function

The `countKeyInJSON` function counts the number of occurrences of a specific key in a JSON object or array.

### Parameters
- `json` (Type: `any`): The `json` parameter is the JSON object or array that you want to search for the specified key in.
- `key` (Type: `string`): The `key` parameter is a string that represents the key you want to count in the JSON object.

### Returns
- `number`: Returns the count of how many times the specified key appears in the given JSON object.

### Example Usage
```typescript
import { countKeyInJSON } from 'lxu-utils';

const jsonObject = {
 key1: 'value',
 key2: 'value',
 nested: {
   key1: 'value',
   key3: 'value',
 },
};

const keyCount = countKeyInJSON(jsonObject, 'key1');
// Result: 2 (Occurrences of 'key1' in the JSON object)
```
## `dividePercentage` Function

The `dividePercentage` function takes a JSON object and a key, and updates the values of that key in the object to distribute a percentage evenly among all occurrences of the key.

### Parameters
- `json` (Type: `any`): The `json` parameter is an object or an array that represents a JSON structure. It can contain nested objects and arrays.
- `key` (Type: `string`): The `key` parameter is a string that represents the key in the JSON object that you want to divide the percentage for.

### Returns
- Updated JSON object: Returns the updated JSON object with the percentage values divided evenly among the objects that have the specified key.

### Example Usage
```typescript
import { dividePercentage } from 'lxu-utils';

const jsonObject = {
  items: [
    { name: 'A', percentage: 0 },
    { name: 'B', percentage: 0 },
    { name: 'C', percentage: 0 },
  ],
};

const updatedJsonObject = dividePercentage(jsonObject, 'percentage');
// Result: All items' 'percentage' values in the JSON object are evenly distributed. {"items": [{ "name": "A", "percentage": 33 },{ "name": "B", "percentage": 33 },{ "name": "C", "percentage": 34 }]}
```

## `extractUniqueValuesByKey` function

The `extractUniqueValuesByKey` function is used to extract unique string values from a specified key in an array of objects.

### Parameters

- `data` (Type: `Record<string, any>[]`): An array of objects containing various key-value pairs.
- `key` (Type: `string`): The key to extract unique values from.

### Returns

- (Type: `string[]`): An array of unique string values from the specified key.

### Example Usage

```typescript
import { extractUniqueValuesByKey } from 'lxu-utils';

const data = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'John' },
];

const uniqueNames = extractUniqueValuesByKey(data, 'name');
console.log(uniqueNames);
// Output: ['John', 'Jane']
```

## `filterObjectsByKeyAndValue` Function

The `filterObjectsByKeyAndValue` function filters an array of objects to return objects that have a specified key-value pair.

### Parameters
- `array` (Type: `Record<string, any>[]`): An array of objects where each object has multiple key-value pairs.
- `key` (Type: `string`): The property name to search for in the objects.
- `value` (Type: `any`): The value to search for in the specified key.

### Returns
- (Type: `Record<string, any>[]`): An array of objects that have the specified key-value pair.

### Example Usage
```typescript
import { filterObjectsByKeyAndValue } from 'lxu-utils';

const data = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'John' },
];

const filteredData = filterObjectsByKeyAndValue(data, 'name', 'John');
console.log(filteredData);
// Output: [{ "id": 1, "name": "John" }, { "id": 3, "name": "John" }]
```

## `removeValueFromArray` Function

The `removeValueFromArray` function removes a specific value from an array of strings and returns the updated array.

### Parameters
- `arr` (Type: `string[]`): An array of strings from which to remove a specific value.
- `value` (Type: `string`): The string value to remove from the array.

### Returns
- (Type: `string[]`): A new array of strings with the specified value removed.

### Example Usage
```typescript
import { removeValueFromArray } from 'lxu-utils';

const fruits = ['apple', 'banana', 'cherry', 'banana', 'date'];
const updatedFruits = removeValueFromArray(fruits, 'banana');
console.log(updatedFruits);
// Output: ['apple', 'cherry', 'date']
```
## `formatNumberWithCommas` Function

The `formatNumberWithCommas` function converts a number to a comma-separated string representation, rounded to the nearest whole number.

### Parameters
- `value` (Type: `number`): The number to be converted.

### Returns
- (Type: `string`): A comma-separated string representation of the rounded number.

### Example Usage
```typescript
import { formatNumberWithCommas } from 'lxu-utils';

const number = 1234567.89;
const formattedNumber = formatNumberWithCommas(number);
console.log(formattedNumber);
// Output: '1,234,568'
```

## `isEmptyObjectOrArray` Function

The `isEmptyObjectOrArray` function checks if an object or array is empty by examining its length or the number of keys it has.

### Parameters
- `obj` (Type: `Record<string, any> | any[]`): The object or array to be checked.

### Returns
- (Type: `boolean`): `true` if the input object or array is empty, `false` otherwise.

### Example Usage
```typescript
import { isEmptyObjectOrArray } from 'lxu-utils';

const emptyArray = [];
const nonEmptyObject = { key: 'value' };

console.log(isEmptyObjectOrArray(emptyArray)); // Output: true
console.log(isEmptyObjectOrArray(nonEmptyObject)); // Output: false
```

## `findMinMaxValues` Function

The `findMinMaxValues` function finds the minimum and maximum values of a specified key in an array of objects.

### Parameters
- `arr` (Type: `any[]`): An array of objects where each object has a property specified by the `key` parameter.
- `key` (Type: `string`): The property name to be used for finding the minimum and maximum values.

### Returns
- (Type: `object`): An object with two properties: "min" and "max". "min" represents the minimum value found in the array of objects based on the specified key, and "max" represents the maximum value.

### Example Usage
```typescript
import { findMinMaxValues } from 'lxu-utils';

const data = [
  { age: 25 },
  { age: 32 },
  { age: 18 },
  { age: 42 },
];

const result = findMinMaxValues(data, 'age');
console.log(result);
// Output: { min: 18, max: 42 }
```

## `assignPercentageToItems` Function

The `assignPercentageToItems` function assigns a percentage value to each item in an array based on the array's length and returns a new array of objects.

### Parameters
- `arr` (Type: `any[]`): An array of any type.

### Returns
- (Type: `object[]`): An array of objects where each object has a `percentage` property representing the divided percentage value.

### Example Usage
```typescript
import { assignPercentageToItems } from 'lxu-utils';

const items = ['A', 'B', 'C', 'D'];
const itemsWithPercentage = assignPercentageToItems(items);
console.log(itemsWithPercentage);
// Output: [{ "percentage": 25 }, { "percentage": 25 }, { "percentage": 25 }, { "percentage": 25 }]
```