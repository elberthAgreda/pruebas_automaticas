import { FormularioRegister } from './formulario';
import { FormBuilder } from '@angular/forms';

describe( 'Forms', () => {

    let component: FormularioRegister;

    beforeEach( () => {
        component = new FormularioRegister( new FormBuilder() );
    });

    it( 'Should have form 2 fields (email, password)', () => {
        expect( component.form.contains('email') ).toBeTruthy();
        expect( component.form.contains('password') ).toBeTruthy();
    });

    it( 'Should have email required', () => {
        const control = component.form.get('email');
        control.setValue('elberth.agreda@gmail.com');
        expect( control.valid ).toBeTruthy();
    });


});
