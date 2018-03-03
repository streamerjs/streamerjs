import LazySequence from './interface/lazy_sequence'
import map from '../methods/map'
import filter from '../methods/filter'
import take from '../methods/take'
import drop from '../methods/drop'
import first from '../methods/first'
import last from '../methods/last'
import all from '../methods/all'
import any from '../methods/any'
import toArray from '../methods/toArray'
import asIterable from '../methods/asIterable'
import sortedBy from '../methods/sortedBy'

export default class IterableSequence<T> implements LazySequence<T> {
  private source: Iterable<T>

  constructor (source: Iterable<T>) {
    this.source = source
  }

  public filter (fn: (T) => boolean): IterableSequence<T> {
    return new IterableSequence(filter<T>(this.source, fn))
  }

  public map<U> (fn: (T) => U): IterableSequence<U> {
    return new IterableSequence(map<T, U>(this.source, fn))
  }

  public take (count: number): Iterable<T> {
    return take(this.source, count)
  }

  public drop (count: number): IterableSequence<T> {
    return new IterableSequence(drop<T>(this.source, count))
  }

  public first (): T {
    return first(this.source)
  }

  public last (): T {
    return last(this.source)
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

  public sortedBy (cmp: (a: T, b: T) => number): IterableSequence<T> {
    return new IterableSequence(sortedBy(this.source, cmp))
  }
}
