import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class Medico2Service {

  constructor( public http: HttpClient ) { }

  getMedicos() {
    return this.http.get('..');
  }

}
