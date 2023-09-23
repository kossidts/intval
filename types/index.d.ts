export = intval;
/**
 * Returns the integer value of any given input value
 * @param {*} value - Input value
 * @param {number} [base] - The base
 * @param {*} [defaultValue] - The default value
 * @returns {number} - The integer value of the provided input value or of the defaultValue in case the input is undefined
 */
declare function intval(value: any, base?: number | undefined, defaultValue?: any): number;
