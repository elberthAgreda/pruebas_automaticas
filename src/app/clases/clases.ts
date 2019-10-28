export class Player {

    points: number;

    constructor() { this.points = 100; }

    takeDamage( hurt: number ): number {
        if ( hurt >= this.points ) {
            this.points = 0;
        } else {
            this.points = this.points - hurt;
        }
        return this.points;
    }

}
