# Intval

Get the integer value of a given variable. It will always return an integer value!

It will return 0 in case the provided value is non numeric or in cases where parseInt would have return NaN.

```js
intval() === 0;
intval(null) === 0;
intval("") === 0;
intval(42) === 42;
intval(4.2) === 4;
intval("42") === 42;
intval("+42") === 42;
intval("-42") === -42;
intval(042) === 34;
intval("042") === 42;
intval(1e10) === 10_000_000_000;
intval("1e10") === 10_000_000_000; // parseInt would have return 1
intval(0x1a) === 26;
intval("0x1A") === 26;
intval(42000000) === 42000000;
intval(420000000000000000000) === 420000000000000000000;
intval("420000000000000000000") === 420000000000000000000;
intval([]) === 0;
(intval(["22foo", "bar"]) === intval("22foo")) === 22; // same as parseInt, returns intval of the first array element. But php intval(["22foo", "bar"]) === 1
intval(true) === 1;
intval(false) === 0;
intval(123_456) === 123456;
intval("123_456") === 123;
```

Pass in a base/radix

```php
intval(42, 8) === 34; // php intval(42, 8) === 42
intval("42", 8) === 34; // php intval("42", 8) === 34
```

# Install

```bash
$ npm install intval
```

# Usage

```js
// commonjs
const intval = require("intval");
// es module
// import intval from "intval";

let myIntValue = intval(myVar);
let myIntValueFromBin = intval(myVar, 2);
```
