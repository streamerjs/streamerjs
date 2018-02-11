/*
 * Takes an Iterable and returns an array of all elements
 *
 */
export default function all<T>(fn: (T) => boolean, iter: Iterable<T>): boolean {
  for (const element of iter) {
    if (!fn(element)) {
      return false;
    }
  }

  return true;
}
