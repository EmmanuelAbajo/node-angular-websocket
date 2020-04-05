import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'app', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)},
  {path: '',redirectTo: 'app',pathMatch: 'full'},
  { path: '**',redirectTo: 'app'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
