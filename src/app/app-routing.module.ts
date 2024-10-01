import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'nav-int',
    loadChildren: () => import('./nav-int/nav-int.module').then( m => m.NavIntPageModule)
  },
  {
    path: 'loading',
    loadChildren: () => import('./loading/loading.module').then( m => m.LoadingPageModule)
  },
  {
    path: 'skeleton',
    loadChildren: () => import('./skeleton/skeleton.module').then( m => m.SkeletonPageModule)
  },
  {
    path: 'routing',
    loadChildren: () => import('./routing/routing.module').then( m => m.RoutingPageModule)
  },
  {
    path: 'tabimpl',
    loadChildren: () => import('./tabimpl/tabimpl.module').then( m => m.TabimplPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
