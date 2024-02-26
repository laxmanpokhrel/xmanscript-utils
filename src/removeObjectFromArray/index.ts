/**
 * The function removes a specified object from an array of objects.
 * @param {Record<string, any>[]} objects - An array of objects.
 * @param object - The `object` parameter is the object that you want to remove from the `objects`
 * array.
 * @returns the updated array after removing the specified object.
 */
export default function removeObjectFromArray(objects: Record<string, any>[], object: Record<string, any>) {
  const index: number = objects.findIndex(item => JSON.stringify(item) === JSON.stringify(object));
  if (index < 0) return objects;
  const result = [...objects.slice(0, index), ...objects.slice(index + 1)];
  return result;
}
