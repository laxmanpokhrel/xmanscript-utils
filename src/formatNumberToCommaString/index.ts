/**
 * Converts a number to a comma-separated string representation, rounded to the nearest whole number.
 * @param {number} value - The number to be converted.
 * @returns {string} A comma-separated string representation of the rounded number.
 */
export default function formatNumberToCommaString(value: number): string {
  if (typeof value !== 'number') {
    console.error('Invalid input: value should be a number.');
    return '';
  }

  return Math.round(value).toLocaleString('en-US');
}
