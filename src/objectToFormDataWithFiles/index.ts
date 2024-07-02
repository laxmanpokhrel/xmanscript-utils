import isJSONObject from '../isJSONObject';

/**
 * The function `objectToFormDataWithFiles` converts a JSON object into a FormData object, handling file uploads
 * and nested objects.
 * @param obj - The `obj` parameter is an object that contains key-value pairs. The keys represent the
 * names of the form fields, and the values represent the corresponding values for those fields. The
 * values can be of any type, including strings, numbers, booleans, arrays, or objects. Additionally,
 * the `
 * @returns a FormData object.
 */
export default function objectToFormDataWithFiles(obj: Record<string, any>): FormData {
  const formData = new FormData();
  const { file, ...rest } = obj;
  file.forEach((item: File) => {
    formData.append('file', item);
  });
  Object.keys(rest).forEach(key => {
    const value = rest[key];
    if (Array.isArray(value) || isJSONObject(value)) formData.append(key, JSON.stringify(value));
    else formData.append(key, value);
  });
  return formData;
}
