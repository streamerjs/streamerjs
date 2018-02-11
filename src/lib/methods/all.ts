/*
 * Takes an Iterable and a function, fn, and returns a boolean
 * if all elements of the iterator matches the given fn
 *
 */
export default function all<T> (iter: Iterable<T>, fn: (T) => boolean): boolean {
  for (const element of iter) {
    if (!fn(element)) {
      return false
    }
  }

  return true
}
