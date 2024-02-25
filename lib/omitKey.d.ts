/**
 * The `omitKey` function removes a specified key from an object and returns a new object
 * without that key.
 * @param {T} obj - The `obj` parameter is the object from which you want to remove a key. It can be of
 * any type `T`.
 * @param {K} key - The `key` parameter is the key of the property that you want to remove from the
 * object. It should be a valid key of the object's type `T`.
 * @returns an object of type `Omit<T, K>`, which is the original object `obj` with the specified `key`
 * removed.
 */
export default function omitKey<T, K extends keyof T>(obj: T, key: K): Omit<T, K>;
