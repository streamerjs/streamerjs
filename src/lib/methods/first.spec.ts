import { test } from 'ava'
import first from './first'

test('take first', t => {
  t.deepEqual(first([1,2,3,4]), 1)
})

test('take first of empty array', t => {
  t.deepEqual(first([]), undefined)
})

test('take first of array with null', t => {
  t.deepEqual(first([null, 2]), null)
})
