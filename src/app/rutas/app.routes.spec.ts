import { routes } from './app.routes';
import { Medico2Component } from '../pIntegracion/medico2/medico2.component';

describe('Main Routes', () => {

    it('Should have route /medico/:id', () => {
        expect( routes ).toContain(
            { path: 'medico/:id', component: Medico2Component }
        );
    });

});
