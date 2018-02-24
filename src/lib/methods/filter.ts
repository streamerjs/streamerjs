/**
 * Takes an Iterable and fn, returns the item if matches the given fn
 *
 * returns a generator
 *
 */
export default function *filter<T> (iter: Iterable<T>, fn: (n: T) => boolean) {
  for (const item of iter) {
    if (fn(item)) {
      yield item
    }
  }
}
