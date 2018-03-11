/**
 * Core interface of Streamer
 *
 * This interface has a set of members that
 */
export default interface LazySequence<T> {
  sortedWith (cmp: (a: T, b: T) => number): LazySequence<T>
  filter (fn: (n: T) => boolean): LazySequence<T>
  map<U> (fn: (n: T) => U): LazySequence<U>
  all (fn?: (T) => boolean): boolean
  any (fn?: (T) => boolean): boolean
  sum (): number
  first (): T
  last (): T
  drop (count: number): LazySequence<T>
  take (count: number): Iterable<T>
  toArray (): T[]
  asIterable (): Iterable<T>
}
