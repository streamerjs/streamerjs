/*
 * Takes an Iterable and a T, returns true if the iterable has the element
 *
 */
export default function contains<T> (iter: Iterable<T>, element: T): boolean {
  for (let val of iter) {
    if (val === element) {
      return true
    }
  }

  return false
}
