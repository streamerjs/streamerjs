/**
 * Terminal method.
 *
 * Takes an Iterable and a number, `count`, and returns another Iterable with `count` elements
 *
 */
export default function take<T>(iter: Iterable<T>, count: number): Iterable<T> {
  let result = [];
  let iterator = iter[Symbol.iterator]();

  while(count >= 0 && count--) {
    let { value, done } = iterator.next();

    if (done) {
      break;
    }

    result.push(value);
  }

  return result;
}
