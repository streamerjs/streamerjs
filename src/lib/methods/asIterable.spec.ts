import { test } from 'ava'
import asIterable from './asIterable'

test('asItereble array', t => {
  const iter = asIterable([1])
  const iterator = iter[Symbol.iterator]()

  t.deepEqual(typeof(iterator), 'object')
  t.deepEqual(iterator.next().value, 1)
})

test('asItereble string', t => {
  const iter = asIterable('boo')
  const iterator = iter[Symbol.iterator]()

  t.deepEqual(typeof(iterator), 'object')
  t.deepEqual(iterator.next().value, 'b')
})

test('asItereble set', t => {
  const iter = asIterable(new Set([1,2,3,4]))
  const iterator = iter[Symbol.iterator]()

  t.deepEqual(typeof(iterator), 'object')
  t.deepEqual(iterator.next().value, 1)
})
