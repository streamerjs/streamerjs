import { test } from 'ava'
import sum from './sum'
import floatEq from '../helpers/floatEq'

test('sum single item', t => {
  t.deepEqual(
    sum([42]),
    42
  )
})

test('sum int', t => {
  t.deepEqual(
    sum([40,1,1]),
    42
  )
})

test('sum int not true', t => {
  t.false(floatEq(sum([40,1,1]), 41))
})

test('sum float', t => {
  t.true(floatEq(sum([40.5, 0.5, 1.0]), 42.0))
})

test('sum float with precision', t => {
  t.true(floatEq(sum([0.5, 1.0, 0.25]), 1.75))
  t.true(floatEq(sum([0.05, 0.001, 0.0001]), 0.0511))
})

test('sum float with negatives', t => {
  t.true(floatEq(sum([40.5, 0.5, 2.0, -0.5, -0.5]), 42))
})

test('sum float not equal', t => {
  t.false(floatEq(sum([40.5, 0.5, 2.0, -0.5]), 42))
})
