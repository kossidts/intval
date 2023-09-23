/**
 * Returns the integer value of any given input value
 * @param {*} value - Input value
 * @param {number} [base] - The base
 * @param {*} [defaultValue] - The default value
 * @returns {number} - The integer value of the provided input value or of the defaultValue in case the input is undefined
 */
const intval = (value, base, defaultValue) => {
    if ("undefined" == typeof value && "undefined" != typeof defaultValue) {
        value = defaultValue;
        base = 10;
    }
    if (value == Number(value)) {
        value = Number(value);
    }
    const parsed = parseInt(value, base || 10);
    return isNaN(parsed) ? 0 : parsed;
};

module.exports = intval;
