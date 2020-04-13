import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { ChatComponent } from './chat/chat.component';
import { TimerComponent } from './timer/timer.component';


const routes: Routes = [{ 
  path: '', 
  component: PagesComponent,
  children: [
    { path: '',redirectTo: 'chat',pathMatch: 'full'},
    { path: 'chat', component: ChatComponent},
    { path: 'timer', component: TimerComponent}
] 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
