import { EventEmitter } from '@angular/core';

export class Player2 {

    points: number;
    pointEmiter = new EventEmitter<number>();

    constructor() { this.points = 100; }

    takeDamage( hurt: number ) {
        if ( hurt >= this.points ) {
            this.points = 0;
        } else {
            this.points = this.points - hurt;
        }
        this.pointEmiter.emit(this.points);
    }

}
