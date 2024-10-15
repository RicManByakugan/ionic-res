import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TailwindNextPage } from './tailwind-next.page';

const routes: Routes = [
  {
    path: '',
    component: TailwindNextPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TailwindNextPageRoutingModule {}
