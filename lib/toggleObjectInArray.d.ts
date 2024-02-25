/**
 * The function removes the target object from the array if it exists, otherwise it adds it to the
 * array.
 * @param {T[]} arr - An array of objects of type T.
 * @param {T} targetObject - The `targetObject` parameter is the object that you want to either remove
 * from the array if it exists, or add to the array if it doesn't exist.
 * @returns the updated array after either removing or adding the target object.
 */
export default function toggleObjectInArray<T>(arr: T[], targetObject: T): T[];
