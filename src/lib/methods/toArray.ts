/*
 * Takes an Iterable and returns an array of all elements
 *
 */
export default function toArray<T> (iter: Iterable<T>): T[] {
  return Array.from(iter)
}
