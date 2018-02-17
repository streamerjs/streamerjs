<div align="center">
  <img src='https://raw.githubusercontent.com/streamerjs/streamerjs/master/assets/logo/streamer.png' />
</br>

  [![Build Status](https://travis-ci.org/streamerjs/streamerjs.svg?branch=master)](https://travis-ci.org/streamerjs/streamerjs)
  [![codecov](https://codecov.io/gh/streamerjs/streamerjs/branch/master/graph/badge.svg)](https://codecov.io/gh/streamerjs/streamerjs)

  Easy to use lazy evaluation library for JavaScript / TypeScript
</div>

___

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
