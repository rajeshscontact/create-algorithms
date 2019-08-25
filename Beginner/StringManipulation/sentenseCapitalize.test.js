import {
    capitalizeSentenseUsingLoop,
    capitalizeSentenseUsingLoopAndJoin,
    capitalizeSentenseUsingMap, capitalizeSentenseUsingMapAndReplace
} from "./sentenseCapitalize";

describe('sentense capitalize', function () {
    describe('using loop', function () {
        it('should capitalize first char of every word in sentense', function () {
            expect(capitalizeSentenseUsingLoop('the tales of scotch!')).toEqual('The Tales Of Scotch!')
            expect(capitalizeSentenseUsingLoop('the taLES of scOTCh!')).toEqual('The Tales Of Scotch!')
        });
    });


    describe('using loop with array', function () {
        it('should capitalize first char of every word in sentense', function () {
            expect(capitalizeSentenseUsingLoopAndJoin('the tales of scotch!')).toEqual('The Tales Of Scotch!')
            expect(capitalizeSentenseUsingLoopAndJoin('the taLES of scOTCh!')).toEqual('The Tales Of Scotch!')
        });
    });


    describe('using loop with map', function () {
        it('should capitalize first char of every word in sentense', function () {
            expect(capitalizeSentenseUsingMap('the tales of scotch!')).toEqual('The Tales Of Scotch!')
            expect(capitalizeSentenseUsingMap('the taLES of scOTCh!')).toEqual('The Tales Of Scotch!')
        });
    });


    describe('using loop with map and replace', function () {
        it('should capitalize first char of every word in sentense', function () {
            expect(capitalizeSentenseUsingMapAndReplace('the tales of scotch!')).toEqual('The Tales Of Scotch!')
            expect(capitalizeSentenseUsingMapAndReplace('the taLES of scOTCh!')).toEqual('The Tales Of Scotch!')
        });
    });
});
