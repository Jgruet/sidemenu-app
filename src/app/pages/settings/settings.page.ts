import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.page.html',
    styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

    personName = 'Isidore ducasse';

    public grade = 5;

    constructor() {
    }

    ngOnInit() {
    }

    doClick(event) {
        console.log(event);
    }


}
