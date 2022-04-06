# Intval

[![License][license-image]][license-url] [![NPM Package Version][npm-image-version]][npm-url] ![GitHub top language][language-image] ![Size][size-image] ![Last Commit][commit-image]

Get the correct integer value of a given variable. It will always return an integer value!

Intval is better than parseInt as it returns the value any developer would have expected, for instance

**`Intval("1e10") === 10_000_000_000`** and **`Intval("3.125e7") === 31_250_000`**
but
**`parseInt("1e10") === 1`** and **`parseInt("3.125e7") === 3`**

It will return 0 in many cases where parseInt would have returned NaN. But not always:
**`intval(true) === 1`** and **`intval(false) === 0`** whereas `parseInt` would have returned `NaN` in both cases but as you know `parseInt(true) !== parseInt(false) !== NaN` ;).

**So if it's supposed to be an integer, cast it with intval.**

This package is inspired by the PHP function intval, but has some differences: for example in PHP `intval("42", 8) === 32` but `intval(42, 8) === 42` whereas this package 34 in both cases.

```js
intval() === 0; // parseInt would have returned NaN
intval(null) === 0; // parseInt would have returned NaN
intval("") === 0; // parseInt would have returned NaN
intval("1e10") === 10_000_000_000; // parseInt would have returned 1
intval(1e10) === 10_000_000_000;
intval(true) === 1; // parseInt would have returned NaN
intval(false) === 0; // parseInt would have returned NaN
intval(42) === 42;
intval(4.2) === 4;
intval("42") === 42;
intval("+42") === 42;
intval("-42") === -42;
intval(042) === 34;
intval("042") === 42;
intval(0x1a) === 26;
intval("0x1A") === 26;
intval(42000000) === 42000000;
intval(420000000000000000000) === 420000000000000000000;
intval("420000000000000000000") === 420000000000000000000;
intval([]) === 0;
(intval(["22foo", "bar"]) === intval("22foo")) === 22; // same as parseInt, returns intval of the first array element. But php intval(["22foo", "bar"]) === 1
intval(123_456) === 123456;
intval("123_456") === 123;
```

Pass in a base/radix

```js
intval(42, 8) === 34;
intval("42", 8) === 34;

intval("1g51", 16) === 1;
intval("1f51", 16) === 8017;
```

## Installation

```bash
$ npm install intval
```

## Usage

### Require Commonjs

```js
const intval = require("intval");
```

### Import ES-Module

```js
import intval from "intval";
```

### Use in Code

```js
let intValue = intval(someValue);
let intValueFromBin = intval(someValue, 2);
```

## Testing (jest)

```bash
npm test
```

## License

See [LICENSE][license-url].

## Copyright

Copyright &copy; 2022. Kossi D. T. Saka.

[npm-image-version]: https://img.shields.io/npm/v/intval.svg
[npm-image-downloads]: https://img.shields.io/npm/dm/intval.svg?color=purple
[npm-url]: https://npmjs.org/package/intval
[license-image]: https://img.shields.io/github/license/kossidts/intval
[license-url]: https://github.com/kossidts/intval/blob/master/LICENSE
[language-image]: https://img.shields.io/github/languages/top/kossidts/intval?color=yellow
[size-image]: https://img.shields.io/github/repo-size/kossidts/intval?color=light
[commit-image]: https://img.shields.io/github/last-commit/kossidts/intval
