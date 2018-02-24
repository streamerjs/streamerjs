/**
 * Takes an Iterable and a number, drops the first `count` elements
 *
 */
export default function *drop<T> (iter: Iterable<T>, count: number) {
  let i = 0

  for (const item of iter) {
    if (i >= count) {
      yield item
    }

    ++i
  }
}
