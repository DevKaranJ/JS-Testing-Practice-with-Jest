// stringUtils.test.js
const stringLength = require('./stringUtils');

test('stringLength throws an error if string is too short', () => {
    expect(() => stringLength('')).toThrow('String length must be between 1 and 10 characters.');
});

test('stringLength throws an error if string is too long', () => {
    expect(() => stringLength('thisIsTooLong')).toThrow('String length must be between 1 and 10 characters.');
});
