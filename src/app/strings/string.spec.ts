import { mensaje } from './string';

describe( 'Test of strings', () => {

    it( 'should return string', () => {
        const resp = mensaje('Elberth');
        expect( typeof resp ).toBe('string');
    });

    it( 'should return send name', () => {
        const nombre = 'Elberth';
        const resp = mensaje(nombre);
        expect( resp ).toContain(nombre);
    });

});
