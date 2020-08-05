import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookFormPageRoutingModule } from './book-form-routing.module';

import { BookFormPage } from './book-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookFormPageRoutingModule
  ],
  declarations: [BookFormPage]
})
export class BookFormPageModule {}
