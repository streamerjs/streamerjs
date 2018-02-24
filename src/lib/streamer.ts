/**
 * Return a Streamer
 *
 * ### Example (es imports)
 * ```js
 * import { Streamer } from 'Streamer'
 * Streamer([1])
 * ```
 *
 * @returns Streamer an instance
 */

import Utils from './utils'
import IterableSequence from './sequence/iterable'

export function Streamer (source: any) {
  if (Utils.isIterable(source)) {
    return new IterableSequence(source)
  }

  return null
}
