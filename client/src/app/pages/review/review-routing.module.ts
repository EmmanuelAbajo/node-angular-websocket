import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewComponent } from './review/review.component';
import { FirstComponent } from './tabs/first/first.component';
import { SecondComponent } from './tabs/second/second.component';
import { ThirdComponent } from './tabs/third/third.component';


const routes: Routes = [
  { path: '', redirectTo: 'test', pathMatch: 'full'},
  {path: 'test', component: ReviewComponent, children: [
    {path: 'first', component: FirstComponent},
    {path: 'second', component: SecondComponent},
    {path: 'third', component: ThirdComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewRoutingModule { }
