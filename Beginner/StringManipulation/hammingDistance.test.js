import {hammingDistance} from "./hammingDistance";

describe('hamming distance', function () {
    describe('if strings are of not same length', function () {
        it('should retuns null', function () {
            expect(hammingDistance('some', 'things')).toEqual(null)
        });
    });

    describe('when strings are of equal length', function () {
        it('should comapres and returns number of changes required', function () {
            expect(hammingDistance('rover', 'river')).toEqual(1)
            expect(hammingDistance('rover', 'thing')).toEqual(5)
        });
    });
});
