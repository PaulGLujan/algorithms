import { expect, test } from '@jest/globals';
import isUnique from './isUnique';

test('unique string should return true', () => {
    const testString = 'abcdef';
    expect(isUnique(testString)).toBe(true);
});

test('non unique string should return false', () => {
    const testString = 'abcda';
    expect(isUnique(testString)).toBe(false);
});
