/**
 * Takes an Iterable and a function, `fn`, and runs the given function for each element of `iter`
 *
 */
export default function *map<T, U>(iter: Iterable<T>, fn: (n: T) => U) {
    for (const item of iter) {
      yield fn(item);
    }
}
