import { test } from 'ava'
import all from './all'

test('all numeric', t => {
  t.deepEqual(all((x) => x > 0, [1,2,3,4]), true);
});

test('all string', t => {
  t.deepEqual(all((x) => /boo/gi.test(x), ['booa', 'boof', 'boo']), true);
});

test('false assert', t => {
  t.deepEqual(all((x) => /boo/gi.test(x), ['booa', 'bof', 'boo']), false);
});

test('mix array', t => {
  t.deepEqual(all((x) => x, [true, true, 1, 0]), false);
});
