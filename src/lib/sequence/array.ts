import LazySequence from './interface/lazy_sequence'
import map from '../methods/map'
import take from '../methods/take'
import first from '../methods/first'
import all from '../methods/all'
import any from '../methods/any'
import toArray from '../methods/toArray'
import asIterable from '../methods/asIterable'

export default class ArraySequence<T> implements LazySequence<T> {
  private source: Iterable<T>

  constructor (source: Iterable<T>) {
    this.source = source
  }

  public map<U> (fn: (T) => U): ArraySequence<U> {
    return new ArraySequence(map<T, U>(this.source, fn))
  }

  public take (count: number): Iterable<T> {
    return take(this.source, count)
  }

  public first (): T {
    return first(this.source)
  }

  public toArray (): T[] {
    return toArray(this.source)
  }

  public asIterable (): Iterable<T> {
    return asIterable(this.source)
  }

  public all (fn?: (T) => boolean): boolean {
    return all(this.source, fn)
  }

  public any (fn?: (T) => boolean): boolean {
    return any(this.source, fn)
  }
}
