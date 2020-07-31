import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormulaireConcertPage } from './formulaire-concert.page';

const routes: Routes = [
  {
    path: '',
    component: FormulaireConcertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormulaireConcertPageRoutingModule {}
