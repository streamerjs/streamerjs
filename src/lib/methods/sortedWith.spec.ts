import { test } from 'ava'
import sortedWith from './sortedWith'

test('desc sorted array', t => {
  const source = [1,2,3,4]
  t.deepEqual(sortedWith(source, (a, b) => b > a ? 1 : -1), [4,3,2,1])
})

test('asc sorted array', t => {
  const source = [4,2,3,1]
  t.deepEqual(sortedWith(source, (a, b) => a > b ? 1 : -1), [1,2,3,4])
})

test('asc sorted string', t => {
  const source = 'hello'
  t.deepEqual(sortedWith(source, (a, b) => b > a ? 1 : -1).join(''), 'ollhe')
})
