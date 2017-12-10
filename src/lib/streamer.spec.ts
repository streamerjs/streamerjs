import { test } from 'ava'
import { Streamer } from 'streamer.js'

test('Streamer constructor', t => {


  let tests = Streamer([1,2,3]);

  console.log(tests);

  for (let boo of tests.map((s) => s*2)) {
    console.log(boo)
  }


  t.is(1,1);


  //t.deepEqual(Streamer([2]), 42)
  
})
