import {capitalizeSentenseUsingLoop} from "./sentenseCapitalize";

describe('sentense capitalize', function () {
    describe('using loop', function () {
        it('should capitalize first char of every word in sentense', function () {
            expect(capitalizeSentenseUsingLoop('the tales of scotch!')).toEqual('The Tales Of Scotch!')
        });
    });
});
