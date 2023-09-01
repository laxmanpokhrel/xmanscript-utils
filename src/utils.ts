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
