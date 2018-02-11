import { test } from 'ava'
import toArray from './toArray'

test('array source', t => {
  const source = [1,2,3,4];
  t.deepEqual(toArray(source), source);
});

test('iter source', t => {
  const source = [1,2,3,4]
  const iter = source[Symbol.iterator]();
  t.deepEqual(toArray(iter), source);
});
