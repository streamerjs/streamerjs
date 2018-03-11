import { test } from 'ava'
import floatEq from './floatEq'

test('integer comparison', t => {
  t.true(floatEq(42, 42))
})

test('float comparison', t => {
  t.true(floatEq(42.1, 42.1))
  t.true(floatEq(42.01, 42))
  t.false(floatEq(42.5, 42))
})
