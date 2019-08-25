import {longestWordUsingLoop, longestWordUsingReduce, longestWordUsingSort} from "./longestWord";

describe('find longest word in sentence', function () {
    describe('using loop', function () {
        it('should returns null', function () {
            expect(longestWordUsingLoop()).toEqual(null)
        });

        it('should returns longest word from sentense', function () {
            expect(longestWordUsingLoop('Top Shelf Web Development Training')).toEqual('Development')
        });
    });

    describe('using reduce', function () {
        it('should returns null', function () {
            expect(longestWordUsingReduce()).toEqual(null)
        });

        it('should returns longest word from sentense', function () {
            expect(longestWordUsingReduce('Top Shelf Web Development Training')).toEqual('Development')
        });
    });

    describe('using sort', function () {
        it('should returns null', function () {
            expect(longestWordUsingSort()).toEqual(null)
        });

        it('should returns longest word from sentense', function () {
            expect(longestWordUsingSort('Top Shelf Web Development Training')).toEqual('Development')
        });
    });
});
