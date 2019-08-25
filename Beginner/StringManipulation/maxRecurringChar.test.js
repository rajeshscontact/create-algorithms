import {maxRecurringCharUsingArray, maxRecurringCharUsingLoop} from "./maxRecurringChar";

describe('find max recurring char in a string', function () {
    describe('using loop', function () {
        it('should returns 0', function () {
            expect(maxRecurringCharUsingLoop('')).toEqual(0)
        });

        it('should returns a', function () {
            expect(maxRecurringCharUsingLoop('aabacada')).toEqual('a')
            expect(maxRecurringCharUsingLoop('aababbcabbda')).toEqual('a')
            expect(maxRecurringCharUsingLoop('klsahdhsadhjsafhwhiwh0iwqhfi0qebvdsjvjdsvj')).toEqual('h')
        });
    });

    describe('using array', function () {
        it('should returns 0', function () {
            expect(maxRecurringCharUsingArray('')).toEqual(0)
        });

        it('should returns a', function () {
            expect(maxRecurringCharUsingArray('aabacada')).toEqual('a')
            expect(maxRecurringCharUsingArray('aababbcabbda')).toEqual('a')
            expect(maxRecurringCharUsingArray('klsahdhsadhjsafhwhiwh0iwqhfi0qebvdsjvjdsvj')).toEqual('h')
        });
    });
});
