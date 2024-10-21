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
        path: 'gallery',
        loadChildren: () => import('../avance/gallery/gallery.module').then( m => m.GalleryPageModule)
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
      },
      {
        path: 'list',
        loadChildren: () => import('../list/list.module').then( m => m.ListPageModule)
      },
      {
        path: 'detail',
        loadChildren: () => import('../detail/detail.module').then( m => m.DetailPageModule)
      },
      {
        path: 'nav-int',
        loadChildren: () => import('../nav-int/nav-int.module').then( m => m.NavIntPageModule)
      },
      {
        path: 'loading',
        loadChildren: () => import('../loading/loading.module').then( m => m.LoadingPageModule)
      },
      {
        path: 'skeleton',
        loadChildren: () => import('../skeleton/skeleton.module').then( m => m.SkeletonPageModule)
      },
      {
        path: 'routing',
        loadChildren: () => import('../routing/routing.module').then( m => m.RoutingPageModule)
      },
      {
        path: 'tailwind',
        loadChildren: () => import('../tailwind/tailwind.module').then( m => m.TailwindPageModule)
      },
      {
        path: 'tailwind-next',
        loadChildren: () => import('../tailwind-next/tailwind-next.module').then( m => m.TailwindNextPageModule)
      },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabimplPageRoutingModule {}
