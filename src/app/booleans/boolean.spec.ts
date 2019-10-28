import { userLogin } from './booleans';

describe('Test of Boolean', () => {

    it( 'Should return true', () => {
        const res = userLogin();
        expect( res ).toBeTruthy();
    });

});
