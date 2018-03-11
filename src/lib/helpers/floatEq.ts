/**
 * Accepts two numbers and returns true if the are equal (or close enough)
 */
export default function floatEq (a: number, b: number): boolean {
  const epsilon = Number.EPSILON

  return Math.abs(a - b) < epsilon
}
