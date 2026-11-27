import defaultTo from '../src/defaultTo.js';

describe('defaultTo - Manual Tests', () => {

    test('returns original value', () => {
        expect(defaultTo(1, 10)).toBe(1);
    });

    test('returns default value for null', () => {
        expect(defaultTo(null, 10)).toBe(10);
    });

    test('returns default value for undefined', () => {
        expect(defaultTo(undefined, 10)).toBe(10);
    });

    test('returns zero unchanged', () => {
        expect(defaultTo(0, 10)).toBe(0);
    });

});