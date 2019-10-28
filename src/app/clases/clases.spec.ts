import { Player } from './clases';

describe( 'Test of Class', () => {

    let player = new Player();

    afterEach( () => {
        // despues de cada prueba se resetea el jugador
        player = new Player();
    });

    it( 'Should return 80 point, if hurt is 20', () => {
        const res = player.takeDamage(20);
        expect( res ).toBe(80);
    });

    it( 'Should return 50 point, if hurt is 50', () => {
        const res = player.takeDamage(50);
        expect( res ).toBe(50);
    });

    it( 'Should return 0 point, if hurt is >= 100', () => {
        const res = player.takeDamage(100);
        expect( res ).toBe(0);
    });

});
