import {Component, OnDestroy, OnInit} from '@angular/core';
import {Map, tileLayer, marker, circle} from 'leaflet';

@Component({
    selector: 'app-my-map',
    templateUrl: './my-map.page.html',
    styleUrls: ['./my-map.page.scss'],
})


export class MyMapPage implements OnInit, OnDestroy {
    public map: Map;

    constructor() {
    }
    ngOnInit() {
    }


    leafLetInit() {
        const coords = [44.8492368, -0.6440745999999999];
        this.map = new Map('mapView');
        this.map.setView(coords, 23);
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(this.map);
        this.map.on('click', (even) => console.log(even));

        circle(coords, {color: 'orange'}).addTo(this.map);
    }

    ionViewDidEnter() {
        this.leafLetInit();
    }


    ngOnDestroy(): void {
        this.map.remove();
    }
}
