import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { ChatComponent } from './chat/chat.component';
import { TimerComponent } from './timer/timer.component';
import { AuditComponent } from './audit/audit.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    { path: '', redirectTo: 'chat', pathMatch: 'full'},
    { path: 'chat', component: ChatComponent},
    { path: 'timer', component: TimerComponent},
    { path: 'audit', component: AuditComponent},
    {
      path: 'review',
      loadChildren: () => import('./review/review.module').then(m => m.ReviewModule),
    },
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
