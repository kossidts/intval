const intval = (value, base) => {
    if (value == Number(value)) {
        value = Number(value);
    }
    const parsed = parseInt(value, base || 10);
    return isNaN(parsed) ? 0 : parsed;
};

module.exports = intval;
