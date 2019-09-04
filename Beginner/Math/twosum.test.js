import {twoSumBruteForce, twoSumOptimized} from "./twosum";

const arrLen = 1000000
const longArr = new Array(arrLen).fill(1)
longArr[arrLen-1] = 8
longArr[arrLen-2] = 3

describe('find elements in array that defines sum', function () {
    describe('brute force way', function () {
        it('should return null if total does not match', function () {
            expect(twoSumBruteForce([1,2,3], 14)).toEqual(null)
        });

        it('should return elements from array', function () {
            expect(twoSumBruteForce([1,2,3], 4)).toEqual([1,3])
            expect(twoSumBruteForce(longArr, 11)).toEqual([3, 8])
        });
    });

    describe('optimized way', function () {
        it('should return null if total does not match', function () {
            expect(twoSumOptimized([1,2,3], 14)).toEqual(null)
        });

        it('should return elements from array', function () {
            expect(twoSumOptimized([1,2,3], 4)).toEqual([1,3])
            expect(twoSumOptimized(longArr, 11)).toEqual([3, 8])
        });
    });
});
