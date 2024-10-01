import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavIntPage } from './nav-int.page';

const routes: Routes = [
  {
    path: '',
    component: NavIntPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavIntPageRoutingModule {}
