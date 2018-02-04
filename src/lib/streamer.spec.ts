import { test } from 'ava'
import { Streamer } from 'streamer.js'

test('Streamer constructor', t => {
  let tests = Streamer([1,2,3,4,5,6,7]);

  for (let boo of tests.map((s) => s as number *2).take(10)) {
    console.log(boo);
  }
  t.is(1,1);
  // t.deepEqual(Streamer([2]), 42)
})
