import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeConcertPage } from './liste-concert.page';

const routes: Routes = [
  {
    path: '',
    component: ListeConcertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeConcertPageRoutingModule {}
