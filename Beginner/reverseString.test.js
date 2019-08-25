import {
    reverseStringUsingLoop,
    reverseStringUsingSplit,
    reverseUsingReduce,
    reverseWithRecursive
} from "./reverseString";

describe('reverse string', () => {
    describe('reverse string using split', function () {
        it('should return empty', function () {
            expect(reverseStringUsingSplit('')).toEqual('')
        });

        it('should return input', function () {
            expect(reverseStringUsingSplit('something')).toEqual('gnihtemos')
        });
    });

    describe('reverse string using loop', function () {
        it('should return empty', function () {
            expect(reverseStringUsingLoop('')).toEqual('')
        });

        it('should return input', function () {
            expect(reverseStringUsingLoop('something')).toEqual('gnihtemos')
        });
    });

    describe('reverse string using recursive', function () {
        it('should return empty', function () {
            expect(reverseWithRecursive('')).toEqual('')
        });

        it('should return input', function () {
            expect(reverseWithRecursive('something')).toEqual('gnihtemos')
        });
    });

    describe('reverse string using reduce', function () {
        it('should return empty', function () {
            expect(reverseUsingReduce('')).toEqual('')
        });

        it('should return input', function () {
            expect(reverseUsingReduce('something')).toEqual('gnihtemos')
        });
    });
});
