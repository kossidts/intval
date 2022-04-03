const intval = (value, base) => {
    if (value == Number(value)) {
        value = Number(value);
    }
    const parsed = parseInt(value, base || 10);
    return isNaN(parsed) ? 0 : parsed;
};

module.exports = intval;

// git push --set-upstream ssh://git@gitlab.kdts.de:22022/kdts/$(git rev-parse --show-toplevel | xargs basename).git $(git rev-parse --abbrev-ref HEAD)
