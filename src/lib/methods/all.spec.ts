import { test } from 'ava'
import all from './all'

test('all numeric', t => {
  t.deepEqual(all([1,2,3,4], (x) => x > 0), true)
})

test('all string', t => {
  t.deepEqual(all(['booa', 'boof', 'boo'], (x) => /boo/gi.test(x)), true)
})

test('false assert', t => {
  t.deepEqual(all(['booa', 'bof', 'boo'], (x) => /boo/gi.test(x)), false)
})

test('mix array', t => {
  t.deepEqual(all([true, true, 1, 0], (x) => x), false)
})
