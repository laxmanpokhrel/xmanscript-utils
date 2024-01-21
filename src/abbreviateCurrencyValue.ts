/* eslint-disable no-nested-ternary */

/**
 * The function converts a number into a currency system by abbreviating it with B for billions, M for
 * millions, and K for thousands.
 * @param {number} labelValue - The `labelValue` parameter is a number that represents a value in a
 * certain currency system.
 * @returns a string or a number.
 */

export default function abbreviateCurrencyValue(labelValue: number): string | number {
  // Nine Zeroes for Billions
  return Math.abs(Number(labelValue)) >= 1.0e9
    ? `${(Math.abs(Number(labelValue)) / 1.0e9).toFixed(1)} B`
    : // Six Zeroes for Millions
    Math.abs(Number(labelValue)) >= 1.0e6
    ? `${(Math.abs(Number(labelValue)) / 1.0e6).toFixed(1)} M`
    : // Three Zeroes for Thousands
    Math.abs(Number(labelValue)) >= 1.0e3
    ? `${(Math.abs(Number(labelValue)) / 1.0e3).toFixed(1)} K`
    : Math.abs(Number(labelValue));
}
