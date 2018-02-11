/**
 * Terminal method.
 *
 * Takes an Iterable and returns the first element
 *
 */
export default function first<T> (iter: Iterable<T>): T {
  let iterator = iter[Symbol.iterator]()
  return iterator.next().value
}
