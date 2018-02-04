export default interface ILazySequence<T> {
  map<U>(fn: (n: T) => U): ILazySequence<U>;
  take(count: number): Iterable<T>;
}
