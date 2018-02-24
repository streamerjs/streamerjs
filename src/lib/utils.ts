export default {
  isArray (source: any) {
    return source instanceof Array
  },

  isIterable (source: any) {
    return typeof(source[Symbol.iterator]) === 'function'
  }
}
