const intval = (value, base, defaultValue) => {
    if ("undefined" == typeof value && "undefined" != typeof defaultValue) {
        return defaultValue;
    }
    if (value == Number(value)) {
        value = Number(value);
    }
    const parsed = parseInt(value, base || 10);
    return isNaN(parsed) ? 0 : parsed;
};

module.exports = intval;
