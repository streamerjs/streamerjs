import { test } from 'ava'
import filter from './filter'

test('filter number', t => {
  t.deepEqual(
    Array.from(filter([1,2,3,4], (x) => x > 2)),
    [3,4]
  )
})

test('filter empty', t => {
  t.deepEqual(
    Array.from(filter([1,2,3,4], (x) => x > 50)),
    []
  )
})

test('filter char array', t => {
  t.deepEqual(
    Array.from(filter(['a', 'b', 'c', 'd'], (x) => x > 'b')),
    ['c', 'd']
  )
})

test('filter string', t => {
  t.deepEqual(
    Array.from(filter('abcd', (x) => x > 'b')),
    ['c', 'd']
  )
})
