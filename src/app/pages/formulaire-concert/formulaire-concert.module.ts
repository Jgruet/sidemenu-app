import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormulaireConcertPageRoutingModule } from './formulaire-concert-routing.module';

import { FormulaireConcertPage } from './formulaire-concert.page';
import {SettingsPageModule} from '../settings/settings.module';
import {StarComponent} from '../../components/star/star.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormulaireConcertPageRoutingModule,
    SettingsPageModule
  ],
  declarations: [FormulaireConcertPage, StarComponent]
})
export class FormulaireConcertPageModule {}
