import { test } from 'ava'
import drop from './drop'

test('drop first', t => {
  t.deepEqual(
    Array.from(drop([1,2,3,4], 1)),
    [2,3,4]
  )
})

test('drop minus', t => {
  t.deepEqual(
    Array.from(drop([1,2,3,4], -1)),
    [1,2,3,4]
  )
})

test('drop string three', t => {
  t.deepEqual(
    Array.from(drop('khayyam', 3)).join(''),
    'yyam'
  )
})
