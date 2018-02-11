/**
 * Core interface of Streamer
 *
 * This interface has a set of members that
 */
export default interface LazySequence<T> {
  map<U> (fn: (n: T) => U): LazySequence<U>
  take (count: number): Iterable<T>
}
