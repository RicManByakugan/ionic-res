import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabimpl',
    loadChildren: () => import('./tabimpl/tabimpl.module').then( m => m.TabimplPageModule)
  },
  {
    path: '',
    redirectTo: 'tabimpl',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
