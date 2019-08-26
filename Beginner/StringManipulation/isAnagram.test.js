import {isAnagramUsingMap, isAnagramUsingRegex} from "./isAnagram";

describe('check if provided words are anagram', function () {
    describe('using regex', function () {
        it('should return false', function () {
            expect(isAnagramUsingRegex('some', 'thing')).toEqual(false)
        });

        it('should return true', function () {
            expect(isAnagramUsingRegex('silent', 'listen')).toEqual(true)
        });
    });

    describe('using map', function () {
        it('should return false', function () {
            expect(isAnagramUsingMap('some', 'thing')).toEqual(false)
        });

        it('should return true', function () {
            expect(isAnagramUsingMap('silent', 'listen')).toEqual(true)
            expect(isAnagramUsingMap('astronomer', 'moonstarer')).toEqual(true)
        });
    });
});
