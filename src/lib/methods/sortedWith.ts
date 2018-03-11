import toArray from './toArray'

/**
 * Takes an Iterable and cmp function, returns the sorted items
 *
 * returns a generator
 *
 */
export default function sortedWith<T> (iter: Iterable<T>, cmp: (a: T, b: T) => number): T[] {
  let source = toArray(iter)
  return source.sort(cmp)
}
