/**
 * Generates a random number between the specified `min` and `max` values.
 * The number can be either positive or negative, with a 50% chance for each.
 *
 * @param {number} min - The minimum possible value (inclusive).
 * @param {number} max - The maximum possible value (inclusive).
 * @returns {number} A random number between `min` and `max`, with equal probability of being positive or negative.
 */
export function getRandomNumber(min: number, max: number): number {

  const number = Math.floor(Math.random() * (max - min + 1)) + min;
  const isNegative = Math.random() < 0.5;

  return isNegative ? -number : number;
}
