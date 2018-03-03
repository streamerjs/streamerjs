import { test } from 'ava'
import last from './last'

test('take last', t => {
  t.deepEqual(last([1,2,3,4]), 4)
})

test('take last array of 1', t => {
  t.deepEqual(last([1]), 1)
})

test('take first of empty array', t => {
  t.deepEqual(last([]), undefined)
})

test('take first of array with null', t => {
  t.deepEqual(last([null, 2]), 2)
})
