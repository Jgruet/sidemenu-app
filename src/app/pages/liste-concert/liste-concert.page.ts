import { Component, OnInit } from '@angular/core';
import {ConcertService} from '../../services/concert.service';

@Component({
  selector: 'app-liste-concert',
  templateUrl: './liste-concert.page.html',
  styleUrls: ['./liste-concert.page.scss'],
})
export class ListeConcertPage implements OnInit {

  constructor(public concertService: ConcertService) { }

  ngOnInit() {
    this.concertService.chargementConcert();
  }

}
