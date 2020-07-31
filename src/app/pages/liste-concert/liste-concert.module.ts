import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeConcertPageRoutingModule } from './liste-concert-routing.module';

import { ListeConcertPage } from './liste-concert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeConcertPageRoutingModule
  ],
  declarations: [ListeConcertPage]
})
export class ListeConcertPageModule {}
