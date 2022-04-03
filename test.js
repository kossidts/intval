const intval = require("./index.js");

let r;
let test = [
    r,
    null,
    "",
    42,
    4.2,
    "42",
    "+42",
    "-42",
    // 042,
    "042",
    1e10,
    "1e10",
    0x1a,
    "0x1a",
    0x1a,
    "0x1A",
    42000000,
    420000000000000000000,
    "420000000000000000000",
    [],
    ["22foo", "bar"],
    true,
    false,
    123_456,
    "123_456",
].map(d => `${d} --> ${intval(d)}`);

console.dir(test);
