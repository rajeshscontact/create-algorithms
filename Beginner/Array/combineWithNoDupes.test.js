import {
    mergeArraysUsingArray,
    mergeArraysUsingFilter,
    mergeArraysUsingReduce,
    mergeArraysUsingSet
} from "./combineWithNoDupes";

describe('merge arrays by removing duplicates', function () {
    describe('using set', function () {
        it('should return single array', function () {
            expect(mergeArraysUsingSet(['1','2'],['3','4'],['1','3'],['4','2'])).toEqual(['1','2','3','4'])
        });
    });

    describe('using array from', function () {
        it('should return single array', function () {
            expect(mergeArraysUsingArray(['1','2'],['3','4'],['1','3'],['4','2'])).toEqual(['1','2','3','4'])
        });
    });

    describe('using array reduce', function () {
        it('should return single array', function () {
            expect(mergeArraysUsingReduce(['1','2'],['3','4'],['1','3'],['4','2'])).toEqual(['1','2','3','4'])
        });
    });

    describe('using array filter', function () {
        it('should return single array', function () {
            expect(mergeArraysUsingFilter(['1','2'],['3','4'],['1','3'],['4','2'])).toEqual(['1','2','3','4'])
        });
    });

});
