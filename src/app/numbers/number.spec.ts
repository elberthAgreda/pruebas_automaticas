import { incrementar } from './numbers';

describe('Test of Numbers', () => {

    it( 'Should return 100, if number is > of 100', () => {
        const res = incrementar(300);
        expect( res ).toBe(100);
    });

    it( 'Should return number + 1, if number is not > of 100', () => {
        const res = incrementar(30);
        expect( res ).toBe(31);
    });

});
