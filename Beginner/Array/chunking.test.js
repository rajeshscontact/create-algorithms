import {splitChunksWithRecursion, splitChunksWithSlice, splitChunksWithSplice} from "./chunking";

describe('split array into chunks', function () {
    describe('using splitChunksWithSlice', function () {
        it('should split array', function () {
            expect(splitChunksWithSlice([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5)).toEqual([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]])
        });
    });

    describe('using splitChunksWithSplice', function () {
        it('should split array', function () {
            expect(splitChunksWithSplice([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5)).toEqual([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]])
        });
    });

    describe('using splitChunksWithRecusion', function () {
        it('should split array', function () {
            expect(splitChunksWithRecursion([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5)).toEqual([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]])
        });
    });
});
