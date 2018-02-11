import { test } from 'ava'
import any from './any'

test('all numeric', t => {
  t.deepEqual(any([1,2,3,4], (x) => x > 3), true)
})

test('all string', t => {
  t.deepEqual(any(['booa', 'boof', 'boo'], (x) => /boof/gi.test(x)), true)
})

test('false assert', t => {
  t.deepEqual(any(['booa', 'bof', 'boo'], (x) => /obama/gi.test(x)), false)
})

test('mix array', t => {
  t.deepEqual(any([true, true, 1, 0], (x) => x), true)
})

test('array with elements and null fn', t => {
  t.deepEqual(any([true, true, 1, 0]), true)
})

test('empty array and null fn', t => {
  t.deepEqual(any([]), false)
})
