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
import ArraySequence from './sequence/array'

export function Streamer (source: any) {
  if (Utils.isArray(source)) {
    return new ArraySequence(source);
  }

  return null;
}
