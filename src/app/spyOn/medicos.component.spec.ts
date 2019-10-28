import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { from, empty, throwError } from 'rxjs';


describe('MedicosComponent', () => {

    let component: MedicosComponent;
    const service: MedicosService = new MedicosService(null);

    beforeEach( () => {
        component = new MedicosComponent(service);
    });


    it('Init: Should load medicos', () => {
        const medicos = ['medico1', 'medico2'];
        spyOn( service, 'getMedicos' ).and.callFake( () => {
            return from([medicos]);
        });
        component.ngOnInit();
        expect( component.medicos.length ).toBeGreaterThan(0);
    });

    it('should call service to agregarMedico', () => {
        const spy = spyOn( service, 'agregarMedico' ).and.callFake( res => empty() );
        component.agregarMedico();
        expect( spy ).toHaveBeenCalled();
    });

    it('Should add a new medico a array medicos', () => {
        const medico = { nombre: 'elberth' };
        spyOn( service, 'agregarMedico' ).and.returnValue( from([ medico ]) );
        component.agregarMedico();
        expect( component.medicos.indexOf( medico ) ).toBeGreaterThanOrEqual(0);
    });

    it('Si falla al agregar el medico, mensajeError debe ser igual al error del subscribe', () => {
        const err = 'error al agregar el medico';
        spyOn( service, 'agregarMedico').and.returnValue( throwError( err ) );
        component.agregarMedico();
        expect( component.mensajeError ).toBe( err );
    });

    it('Shoul request server to delete medico', () => {
        // este espia es para CONFIRMAR el dialog al borrar un medico
        spyOn( window, 'confirm' ).and.returnValue(true);

        const spy = spyOn( service, 'borrarMedico' ).and.returnValue( empty() );
        component.borrarMedico('1');
        expect( spy ).toHaveBeenCalledWith('1');
    });

    it('Shoul NOT request server to delete medico', () => {
        // este espia es para NEGAR el dialog al borrar un medico
        spyOn( window, 'confirm' ).and.returnValue(false);

        const spy = spyOn( service, 'borrarMedico' ).and.returnValue( empty() );
        component.borrarMedico('1');
        expect( spy ).not.toHaveBeenCalledWith('1');
    });

});
