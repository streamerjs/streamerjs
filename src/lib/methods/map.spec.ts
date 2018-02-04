import { test } from 'ava'
import map from './map'

test('map number', t => {
  t.deepEqual(
    Array.from(map([1,2,3,4], (x) => x+1)),
    [2,3,4,5]
  );
});

test('map string', t => {
  t.deepEqual(
    Array.from(map(['1', '2', '3', '4'], (x) => 'a' + x)),
    ['a1','a2','a3','a4']
  );
});
