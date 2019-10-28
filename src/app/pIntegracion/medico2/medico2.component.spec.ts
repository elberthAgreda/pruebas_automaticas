import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { Medico2Component } from './medico2.component';
import { Medico2Service } from './medico.service';

describe('Medico2 Component', () => {
  let component: Medico2Component;
  let fixture: ComponentFixture<Medico2Component>;

  // Espere hasta que la funcion retorne - No es necesario, se deja para darle orden
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Medico2Component ],
      imports: [HttpClientModule],
      providers: [Medico2Service]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Medico2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Verifica que el componente se cree de forma correcta
  it('Should create component', () => {
    expect( component ).toBeTruthy();
  });

  it('Should return name of medico', () => {
    const name = 'Elberth';
    const res = component.saludar( name );
    expect( res ).toContain( name );
  });

});
