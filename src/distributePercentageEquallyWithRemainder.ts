/**
 * The function divides a given percentage into equal parts and distributes any remaining percentage
 * across the parts.
 * @param {Record<string, any>[]} array - The `array` parameter is an array of objects, where each
 * object represents a part that needs to be divided into equal parts. Each object can have any
 * properties, but in this case, we are only interested in the `percentage` property.
 * @returns an array of objects, where each object represents a part and contains a "percentage"
 * property.
 */
export default function distributePercentageEquallyWithRemainder(array: Record<string, any>[]): Record<string, any>[] {
  const equalPartPercentage = Math.floor(100 / array.length);
  const remainingPercentage = 100 % array.length;

  const parts: Record<string, any>[] = [];

  // Create equal parts with the calculated percentage
  for (let i = 0; i < array.length; i += 1) {
    const part: Record<string, any> = {
      percentage: +equalPartPercentage,
    };
    parts.push(part);
  }

  // Distribute the remaining percentage across the parts
  for (let i = 0; i < remainingPercentage; i += 1) {
    parts[i].percentage += 1;
  }
  return parts;
}
