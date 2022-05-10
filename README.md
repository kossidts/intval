# Intval

[![License][license-image]][license-url] [![NPM Package Version][npm-image-version]][npm-url] ![GitHub top language][language-image] ![Size][size-image] ![Last Commit][commit-image] ![Workflow CI][workflow-image]

**Intval will always return the sensible integer value of a given variable.** For instance:

`intval("1e10") === 10_000_000_000` but `parseInt("1e10") === 1`

`intval("3.125e7") === 31_250_000` but `parseInt("3.125e7") === 3`

**`intval(true) === 1`** and **`intval(false) === 0`**

whereas `parseInt` would have returned `NaN` in both cases but as you know:

`parseInt(true) !== NaN !== parseInt(false) ` though it `isNaN()` ;).

Unlike _parseInt_, `intval` will never return `NaN`. But **you can provide a default value to be returned, in case the variable is undefined**. Hence `intval` eliminates the needs to check against `NaN` and it helps you write even cleaner code.

Syntax:

`intval(someValue)`

`intval(someValue, base)`

`intval(someValue, base, defaultValue)`

This package is inspired by the PHP function intval, but this package is consistent in a javaScript way: for example in PHP

`<?php intval("42", 8) === 34; ?>` but `<?php intval(42, 8) === 42; ?>`

whereas this package returns 34 in both cases.

**So if it's supposed to be an integer, cast it with intval.**

## Installation

```bash
$ npm i intval
```

## Usage

##### Require CommonJS (default)

```js
const intval = require("intval");
```

##### Import ES-Module (default)

```js
import intval from "intval";
```

##### Import ES-Module (named)

```js
import { intval } from "intval";
```

#### Use in Code ([more examples below](#some-examples))

```js
let intValue = intval(someValue);
```

##### With base/radix

`intval(someValue, base)`

```js
let intValue = intval(someValue, 2);
```

##### With default value for undefined variables

`intval(someValue, base, defaulValue)`

```js
let intValue = intval(someValue, 10, 42);
```

is the same as

```js
let intValue = typeof someValue != "undefined" ? intval(someValue) : 42;
```

**Caution: The default value will not be type casted and the base/radix has no effect on it. So, the following will return a string value "42" in case 'someValue' is undefined**

```js
let myValue = intval(undefinedVariable, 16, "42");

// myValue === 66 --> false
// myValue === 42 --> false
// myValue === "42" --> true
```

### Some examples

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

#### Pass in a base/radix as a second argument - just like with parseInt

```js
intval(42, 8) === 34;
intval("42", 8) === 34;

intval(1011, 2) === 11;

intval("1g51", 16) === 1;
intval("1f51", 16) === 8017;
```

#### Pass in a default value in case the variable is undefined

As described above the base has no effect on the default value.

```js
let someValue; // undefined
intval(someValue, 10, 42) === 42;
intval(someValue, 8, 42) === 42;
intval(someValue, 8, "42") === "42";

intval("1g51", 16, 42) === 1;
intval(someValue, 16, 42) === 42;
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
[actions-url]: https://github.com/kossidts/intval/actions
[workflow-image]: https://github.com/kossidts/intval/actions/workflows/node.js.yml/badge.svg
[workflow-image-2]: https://github.com/kossidts/intval/workflows/Node.js%20CI/badge.svg

<!--
[paypal-img]: https://img.shields.io/badge/Donate-PayPal-ff4081.svg
[paypal-link]: https://www.paypal.me/christopheKDTS

[![PayPal Donate][paypal-img]][paypal-link]
-->
