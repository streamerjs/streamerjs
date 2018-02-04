import ILazySequence from './lazy_sequence'
import map from '../methods/map'
import take from '../methods/take'

export default class ArraySequence<T> implements ILazySequence<T> {
  private source: Iterable<T>;

  constructor(source: Iterable<T>) {
    this.source = source;
  }

  public map<U>(fn: (n: T) => U): ArraySequence<U> {
    return new ArraySequence(map<T, U>(this.source, fn));
  }

  public take(count: number): Iterable<T> {
    return take(this.source, count);
  }
}
