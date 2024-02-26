/**
 * The function splits an array into multiple arrays of a specified size.
 * @param {Record<string, any>[]} array - An array of objects, where each object has string keys and
 * any values.
 * @param {number} size - The `size` parameter represents the desired size of each subarray. It
 * determines how many elements should be included in each subarray when splitting the original array.
 * @returns an array of arrays. Each inner array contains a subset of the original array, with each
 * subset having a maximum size specified by the "size" parameter.
 */
export default function splitArrayIntoChunks(array: Record<string, any>[], size: number) {
  return array.reduce((acc: Record<string, any>[][], current: Record<string, any>) => {
    if (acc.length === 0 || acc[acc.length - 1].length === size) {
      acc.push([current]);
    } else {
      acc[acc.length - 1].push(current);
    }
    return acc;
  }, []);
}
