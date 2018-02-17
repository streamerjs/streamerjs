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

## FAQ

### What is Streamer.js?

Streamer.js is a lazy evaluation for iterable data types (Set, Array, LinkedList, Generators, etc.). It can also send HTTP requests and ask the data from remote endpoints. Streamer.js tries to implement most of [Kotlin Lazy Sequence](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.sequences/index.html) methods.

### What is "Lazy Evaluation"?

In programming language theory, lazy evaluation, or call-by-need is an evaluation strategy which delays the evaluation of an expression until its value is needed (non-strict evaluation).  
Read more: https://en.wikipedia.org/wiki/Lazy_evaluation

### Bug report

Please open a ticket in GitHub issues.

### Contribution

Please create a branch for each patch and send a PR to GitHub. Make sure you write tests. There is a CI integarated with this repo. 

## License

GPLv3
