import { test } from 'ava'
import take from './take'

test('take minus', t => {
  t.deepEqual(take([1,2,3,4], -1), [])
})

test('take zero', t => {
  t.deepEqual(take([1,2,3,4], 0), [])
})

test('take positive', t => {
  t.deepEqual(take([1,2,3,4], 1), [1])
  t.deepEqual(take([1,2,3,4], 2), [1,2])
})

test('take more than number of elements', t => {
  t.deepEqual(take([1,2,3,4], 50), [1,2,3,4])
})
