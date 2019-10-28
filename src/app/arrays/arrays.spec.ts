import { getRobots } from './arrays';

describe( 'Test of Arrays', () => {

    it( 'Should return >= 3 items', () => {
        const res = getRobots();
        expect( res.length ).toBeGreaterThanOrEqual(3);
    });

    it( 'Should have MegaMan y Ultron', () => {
        const res = getRobots();
        expect( res ).toContain('MegaMan');
        expect( res ).toContain('Ultron');
    });

});
