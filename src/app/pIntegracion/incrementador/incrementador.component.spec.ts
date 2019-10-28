import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Should show legend', () => {
        const leyenda = 'Progreso de Carga';
        component.leyenda = leyenda;
        // Dispara la detencion de cambios
        fixture.detectChanges();

        const elem: HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;
        expect( elem.innerHTML ).toContain(leyenda);
    });

    it('Should show in input to progress value', () => {
        component.cambiarValor(5);
        fixture.detectChanges();
        // cuando termine la detencion de cambios dispara una promesa
        fixture.whenStable().then( () => {
            const input = fixture.debugElement.query( By.css('input') ).nativeElement;
            // En el constructor esta en 50 + 5 = 55
            expect( input.value ).toBe( '55' );
        });
    });

    it('Deberia incrementar/decrementar en 5, con un clic en el botón', () => {
        const btns = fixture.debugElement.queryAll( By.css('.btn-primary') );
        // Obtiene el primer boton que decrementa
        btns[0].triggerEventHandler('click', null);
        expect( component.progreso ).toBe(45);

        // Obtiene el segundo boton que incrementa
        btns[1].triggerEventHandler('click', null);
        expect( component.progreso ).toBe(50);
    });

    it('Al decrementar deberia disminuir el valor del porcentaje', () => {
        const btns = fixture.debugElement.queryAll( By.css('.btn-primary') );
        // Obtiene el primer boton que decrementa
        btns[0].triggerEventHandler('click', null);

        // Refresca el componente
        fixture.detectChanges();

        const elem: HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;
        expect( elem.innerHTML ).toContain('45');
    });

    it('Al incrementar deberia aumentar el valor del porcentaje', () => {
        const btns = fixture.debugElement.queryAll( By.css('.btn-primary') );
        // Obtiene el primer boton que decrementa
        btns[1].triggerEventHandler('click', null);

        // Refresca el componente
        fixture.detectChanges();

        const elem: HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;
        expect( elem.innerHTML ).toContain('55');
    });

});
