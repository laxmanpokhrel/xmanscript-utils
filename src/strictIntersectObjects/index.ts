/**
 * The function `strictIntersectObjects` takes two objects as input and returns a new object that
 * contains only the key-value pairs that exist in both input objects and have the same value.
 * @param obj1 - An object with string keys and any values.
 * @param obj2 - obj2 is a record object containing key-value pairs.
 * @returns a new object that contains the key-value pairs from `obj2` that also exist in `obj1` and
 * have the same value.
 */
export default function strictIntersectObjects(
  obj1: Record<string, any>,
  obj2: Record<string, any>
): Record<string, any> {
  const obj2Keys = Object.keys(obj2);
  if (!obj2Keys.length) return {};
  const intersectedObj = obj2Keys.reduce((acc: Record<string, any>, item: string) => {
    if (obj1[item] && obj1[item] === obj2[item]) acc[item] = obj2[item];
    return acc;
  }, {});
  return intersectedObj;
}
