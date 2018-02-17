/**
 * Core interface of Streamer
 *
 * This interface has a set of members that
 */
export default interface LazySequence<T> {
  map<U> (fn: (n: T) => U): LazySequence<U>
  all (fn?: (T) => boolean): boolean
  any<T> (fn?: (T) => boolean): boolean
  first (): T
  take (count: number): Iterable<T>
  toArray (): T[]
  asIterable (): Iterable<T>
}
