import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-person',
    templateUrl: './person.component.html',
    styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {

    @Input() name = 'Inconnu';

    private nbClicks = 0;

    @Output() countClick: EventEmitter<number>;

    constructor() {
        this.countClick = new EventEmitter<number>();
    }

    ngOnInit() {
    }

    onClick() {
        this.nbClicks++;
        this.countClick.emit(this.nbClicks); // l'emission est récupéré par la page settings.page.htlml
    }

}
