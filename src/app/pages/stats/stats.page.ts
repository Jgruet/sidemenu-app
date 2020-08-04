import { Component, OnInit } from '@angular/core';
import {ConcertService} from '../../services/concert.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
})
export class StatsPage implements OnInit {

  constructor(public concertService: ConcertService) { }

  ngOnInit() {
    this.concertService.chargementGroupe();
    this.concertService.chargementConcert();
  }

}
