import { Routes } from '@angular/router';
import { Medico2Component } from '../pIntegracion/medico2/medico2.component';
import { IncrementadorComponent } from '../pIntegracion/incrementador/incrementador.component';

export const routes: Routes = [
    { path: 'medico/:id', component: Medico2Component },
    { path: 'incrementador', component: IncrementadorComponent }
];
