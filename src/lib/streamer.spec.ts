import { test } from 'ava'
import { Streamer } from 'streamer.js'

test('Streamer', t => {
  t.deepEqual(Streamer(), 42)
})
