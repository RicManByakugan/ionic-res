import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabimplPage } from './tabimpl.page';

const routes: Routes = [
  {
    path: '',
    component: TabimplPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'loading',
        loadChildren: () => import('../loading/loading.module').then(m => m.LoadingPageModule)
      },
      {
        path: 'skeleton',
        loadChildren: () => import('../skeleton/skeleton.module').then(m => m.SkeletonPageModule)
      },
      {
        path: 'routing',
        loadChildren: () => import('../routing/routing.module').then(m => m.RoutingPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabimplPageRoutingModule {}
