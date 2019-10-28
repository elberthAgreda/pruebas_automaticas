import { Component, OnInit } from '@angular/core';
import { Medico2Service } from './medico.service';

@Component({
  selector: 'app-medico2',
  templateUrl: './medico2.component.html',
  providers: [Medico2Service]
})
export class Medico2Component implements OnInit {

  medicos: any[] = [];

  constructor( private medicoService: Medico2Service ) { }

  ngOnInit() {
  }

  saludar( nombre: string ): string {
    return `Hola ${nombre}`;
  }

  obtenerMedicos() {
    this.medicoService.getMedicos().subscribe(
      ( medicos: any[] ) => this.medicos = medicos
    );
  }

}
