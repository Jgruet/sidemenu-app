import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingsPageRoutingModule } from './settings-routing.module';

import { SettingsPage } from './settings.page';
import {PersonComponent} from '../../components/person/person.component';
import {StarComponent} from '../../components/star/star.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SettingsPageRoutingModule
    ],
    exports: [
        StarComponent
    ],
    declarations: [SettingsPage, PersonComponent, StarComponent]
})
export class SettingsPageModule {}
