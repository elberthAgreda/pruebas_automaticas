import { Player2 } from './player2';


describe( 'Player 2 Emit', () => {

    let player: Player2;

    beforeEach( () => player = new Player2() );

    it( 'Should emit event when recieve hurt', () => {
        let newPoints = 0;
        player.pointEmiter.subscribe( points => newPoints = points );
        player.takeDamage(110);
        expect( newPoints ).toBe(0);
    });

    it( 'Should emit event when recieve hurt and survive', () => {
        let newPoints = 0;
        player.pointEmiter.subscribe( points => newPoints = points );
        player.takeDamage(50);
        expect( newPoints ).toBe(50);
    });

});
