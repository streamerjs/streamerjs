<div align="center">

<b>StreamerJs</b>
</br>

[![Build Status](https://travis-ci.org/streamerjs/streamerjs.svg?branch=master)](https://travis-ci.org/streamerjs/streamerjs)

Easy to use lazy evaluation library for JavaScript / TypeScript

<hr></hr>
</div>

**Example:** 

```js

Streamer([1, 2, 3, 4])
  .map(x => x * 2)
  .filter(x => x > 6)
  .take(2);
```

Piece of :cake:

## License

GPLv3
