/**
 * The intersectObjects function takes two objects as input and returns a new object that contains
 * only the properties that exist in both input objects.
 * @param obj1 - An object of type `Record<string, any>`, which means it can have any number of
 * properties of any type.
 * @param obj2 - The `obj2` parameter is a record object that contains key-value pairs.
 * @returns The function `intersectObjects` returns a new object that contains the intersection of
 * properties between `obj1` and `obj2`.
 */
export default function intersectObjects(obj1: Record<string, any>, obj2: Record<string, any>): Record<string, any> {
  const obj2Keys = Object.keys(obj2);
  if (!obj2Keys.length) return {};
  const intersectedObj = obj2Keys.reduce((acc: Record<string, any>, item: string) => {
    if (obj1[item]) acc[item] = obj2[item];
    return acc;
  }, {});
  return intersectedObj;
}
