import {vowelCountsUsingRegex, vowelCountUsingLoop} from "./vowelCount";

describe('vowel count', function () {
    describe('using loop', function () {
        it('should returns 0', function () {
            expect(vowelCountUsingLoop('')).toEqual(0)
        });

        it('should returns 3', function () {
            expect(vowelCountUsingLoop('anehizxcv')).toEqual(3)
            expect(vowelCountUsingLoop('anEhIzxcv')).toEqual(3)
        });
    });

    describe('using regex', function () {
        it('should returns 0', function () {
            expect(vowelCountsUsingRegex('')).toEqual(0)
        });

        it('should returns 3', function () {
            expect(vowelCountsUsingRegex('anehizxcv')).toEqual(3)
            expect(vowelCountsUsingRegex('anEhIzxcv')).toEqual(3)
        });
    });
});
