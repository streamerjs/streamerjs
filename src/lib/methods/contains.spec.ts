import { test } from 'ava'
import contains from './contains'

test('contains first', t => {
  t.deepEqual(contains([1], 1), true)
})

test('contains last', t => {
  t.deepEqual(contains([1,2,3,4], 4), true)
})

test('contains empty array', t => {
  t.deepEqual(contains([], 4), false)
})

test('contains string', t => {
  t.deepEqual(contains('boo', 'o'), true)
})

test('contains set', t => {
  t.deepEqual(contains(new Set([1,2,3]), 1), true)
})
