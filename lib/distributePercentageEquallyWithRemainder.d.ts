/**
 * The function divides a given percentage into equal parts and distributes any remaining percentage
 * across the parts.
 * @param {Record<string, any>[]} array - The `array` parameter is an array of objects, where each
 * object represents a part that needs to be divided into equal parts. Each object can have any
 * properties, but in this case, we are only interested in the `percentage` property.
 * @returns an array of objects, where each object represents a part and contains a "percentage"
 * property.
 */
export default function distributePercentageEquallyWithRemainder(array: Record<string, any>[]): Record<string, any>[];
