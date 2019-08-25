import {
    isPalindromeUsingLoop,
    isPalindromeUsingLoopOptimized,
    isPalindromeUsingReduce,
    isPalindromeUsingReverse
} from "./palindrome";

describe('check if the input is palindrome', function () {
    describe('and using reverse', function () {
        it('should return false', function () {
            expect(isPalindromeUsingReverse('something')).toEqual(false)
        });

        it('should returns true', function () {
            expect(isPalindromeUsingReverse('racecar')).toEqual(true)
        });
    });


    describe('and using reduce', function () {
        it('should return false', function () {
            expect(isPalindromeUsingReduce('something')).toEqual(false)
        });

        it('should returns true', function () {
            expect(isPalindromeUsingReduce('racecar')).toEqual(true)
        });
    });


    describe('and using loop', function () {
        it('should return false', function () {
            expect(isPalindromeUsingLoop('something')).toEqual(false)
        });

        it('should returns true', function () {
            expect(isPalindromeUsingLoop('racecar')).toEqual(true)
        });
    });


    describe('and using loop optimized', function () {
        it('should return false', function () {
            expect(isPalindromeUsingLoopOptimized('something')).toEqual(false)
        });

        it('should returns true', function () {
            expect(isPalindromeUsingLoopOptimized('racecar')).toEqual(true)
        });
    });
});
