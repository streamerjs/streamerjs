/**
 * Terminal method.
 *
 * Takes an Iterable and returns the last element.
 *
 * Be careful with this method. If the length of given data structure
 * is unknown, this method would go through all elements to find the last one
 *
 * Runtime: O(n)
 */
export default function last<T> (iter: Iterable<T>): T {
  let iterator = iter[Symbol.iterator]()
  let prev = iterator.next()

  while (true) {
    let item = iterator.next()

    if (!item.done) {
      prev = item
    } else {
      return prev.value
    }
  }
}
