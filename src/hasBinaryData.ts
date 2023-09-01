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