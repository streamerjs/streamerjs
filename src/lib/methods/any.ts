/*
 * Takes an Iterable and a function, fn, and returns a boolean
 * if at least one element of the iterator matches the given fn
 *
 */
export default function any<T> (iter: Iterable<T>, fn?: (T) => boolean): boolean {
  const iterator = iter[Symbol.iterator]()

  if (!fn && !iterator.next().done) {
    return true
  }

  for (const element of iter) {
    if (fn(element)) {
      return true
    }
  }

  return false
}
