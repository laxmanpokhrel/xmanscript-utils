/**
 * The function adds a "checked" field to each object in an array based on whether a corresponding
 * string value is included in another array.
 * @param {T[]} objects - An array of objects of type T.
 * @param {string[]} strings - An array of strings that will be used to check against the values of the
 * chooseKey property in each object.
 * @param chooseKey - The `chooseKey` parameter is the key of the property in the objects that you want
 * to compare with the strings. It is of type `keyof T`, which means it can be any valid key of the
 * objects in the `objects` array.
 * @returns The function `markCheckedByStringMatch` returns an array of objects of type `T` with an
 * additional `checked` field.
 */

export default function markCheckedByStringMatch<T>(objects: T[], strings: string[], chooseKey: keyof T): T[] {
  const x = objects.map(object => {
    const chooseValue = (object[chooseKey] as unknown as string).toString();
    const checked = strings.includes(chooseValue);
    return { ...object, checked };
  });
  return x;
}
