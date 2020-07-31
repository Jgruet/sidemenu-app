import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.scss'],
})
export class StarComponent implements OnInit {

    @Input() max = 5;

    @Input() activeColor = 'danger';

    @Input() inactiveColor = 'medium';

    //Liste des valeurs
    public values: number[] = [];

    @Input() starValue;
    @Output() starValueChange: EventEmitter<number>;

    constructor() {
        this.starValueChange = new EventEmitter<number>();
    }

    ngOnInit() {
        // Remplissage de la liste des valeurs
        for (let i = 1; i < this.max; i++){
            this.values.push(i);
        }
    }

    setStarValue(n){
        this.starValue = n;
        this.starValueChange.emit(n);
    }

}
