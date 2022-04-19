const intval = require("../../index.js");

describe.each([
    { val: undefined, expected: 0 },
    { val: null, expected: 0 },
    { val: "", expected: 0 },
    { val: 42, expected: 42 },
    { val: 4.2, expected: 4 },
    { val: "42", expected: 42 },
    { val: "+42", expected: 42 },
    { val: "-42", expected: -42 },
    // { val: 042, expected: 34 },
    { val: "042", expected: 42 },
    { val: 1e10, expected: 10_000_000_000 },
    { val: "1e10", expected: 10_000_000_000 },
    { val: 0x1a, expected: 26 },
    { val: "0x1a", expected: 26 },
    { val: 42000000, expected: 42_000_000 },
    { val: 420000000000000000000, expected: 420_000_000_000_000_000_000 },
    { val: [], expected: 0 },
    { val: ["22foo"], expected: 22 },
    { val: ["22foo", "bar"], expected: 22 },
    { val: true, expected: 1 },
    { val: false, expected: 0 },
    { val: 123_456, expected: 123456 },
    { val: "123_456", expected: 123 },
])("intval($val)", ({ val, expected }) => {
    it(`returns ${expected}`, () => {
        expect(intval(val)).toBe(expected);
    });
});

// Intval with radix
describe.each([
    { val: undefined, radix: 8, expected: 0 },
    { val: 42, radix: 8, expected: 34 },
    { val: undefined, radix: 16, expected: 0 },
    { val: 42, radix: 16, expected: 66 },
    { val: "1g51", radix: 16, expected: 1 },
    { val: "1f51", radix: 16, expected: 8017 },
    { val: undefined, radix: 2, expected: 0 },
    { val: 42, radix: 2, expected: 0 },
    { val: 1011, radix: 2, expected: 11 },
])("intval($val, $radix)", ({ val, radix, expected }) => {
    it(`returns ${expected}`, () => {
        expect(intval(val, radix)).toBe(expected);
    });
});

// Intval with defaultValue
describe.each([
    { val: undefined, radix: 8, defaultValue: 42, expected: 42 },
    { val: 42, radix: 8, defaultValue: 42, expected: 34 },
    { val: undefined, radix: 16, defaultValue: 42, expected: 42 },
    { val: 42, radix: 16, defaultValue: 42, expected: 66 },
    { val: "1g51", radix: 16, defaultValue: 42, expected: 1 },
    { val: "1f51", radix: 16, defaultValue: 42, expected: 8017 },
    { val: undefined, radix: 2, defaultValue: 42, expected: 42 },
    { val: 42, radix: 2, defaultValue: 42, expected: 0 },
    { val: 1011, radix: 2, defaultValue: 42, expected: 11 },
    { val: 404, radix: 10, defaultValue: 42, expected: 404 },
])("intval($val, $radix, $defaultValue)", ({ val, radix, defaultValue, expected }) => {
    it(`returns ${expected}`, () => {
        expect(intval(val, radix, defaultValue)).toBe(expected);
    });
});

describe("intval(undefined, 10, '42')", () => {
    it(`returns a string value 42`, () => {
        let someValue;
        expect(intval(someValue, 10, "42")).toStrictEqual("42");
    });
});
