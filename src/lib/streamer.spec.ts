import { test } from 'ava'
import { Streamer } from 'streamer.js'

test('Streamer array all', t => {
  const source = [1,2,3,4,5,6]
  let streamer = Streamer(source)

  t.deepEqual(false, streamer.all((x) => x > 2))
})

test('Streamer array map', t => {
  const source = [1,2,3,4,5,6]
  const target = [2,4,6,8,10,12]
  let streamer = Streamer(source)

  t.deepEqual(target, streamer.map((x) => x * 2).toArray())
})

test('Streamer array take', t => {
  const source = [1,2,3,4,5,6]
  const target = [1,2,3]
  let streamer = Streamer(source)

  t.deepEqual(target, streamer.take(3))
})

test('Streamer array toArray', t => {
  const source = [1,2,3,4,5,6]
  let streamer = Streamer(source)

  t.deepEqual(source, streamer.toArray())
})

test('Streamer array first', t => {
  const source = [1,2,3,4,5,6]
  let streamer = Streamer(source)

  t.deepEqual(1, streamer.first())
})

test('Streamer array filter and first', t => {
  const source = [1,2,3,4,5,6]
  let streamer = Streamer(source)

  t.deepEqual(4, streamer.filter((x) => x > 3).first())
})

test('Streamer array filter and take', t => {
  const source = [1,2,3,4,5,6]
  let streamer = Streamer(source)

  t.deepEqual([3, 4], streamer.filter((x) => x > 2).take(2))
})

test('Streamer string filter and take', t => {
  const source = 'you are beautiful'
  let streamer = Streamer(source)

  t.deepEqual('beautiful', streamer.drop(8).toArray().join(''))
})

test('Streamer array number sort with last / first', t => {
  const source = [5,3,1,2,6,9,8]
  let streamer = Streamer(source)
  const desc = (a, b) => a > b ? 1 : -1
  const asc = (a, b) => b > a ? 1 : -1

  t.deepEqual(1, streamer.sortedWith(desc).first())
  t.deepEqual(9, streamer.sortedWith(desc).last())
  t.deepEqual(9, streamer.sortedWith(asc).first())
  t.deepEqual(1, streamer.sortedWith(asc).last())
})

test('Streamer sum of numbers', t => {
  const source = [3, 1, 0.2]
  let streamer = Streamer(source)

  t.deepEqual(4.2, streamer.sum())
})
