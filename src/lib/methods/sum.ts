/*
 * Takes an Iterable of numbers and returns the sum
 *
 */
export default function sum (iter: Iterable<any>): number {
  let _sum = 0

  for (const item of iter) {
    _sum += item
  }

  return _sum
}
