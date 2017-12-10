export default class ArraySequence<T> {
  private source: T[];

  constructor(source: T[]) {
    this.source = source;
  }

  public *map(fn: (n: T) => T) {
    console.log('called')
    for (let item of this.source) {
      console.log('mapping', item);
      yield fn(item);
    }
  }
}

