import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewRoutingModule } from './review-routing.module';
import { ReviewComponent } from './review/review.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { HeaderComponent } from './header/header.component';
import { FirstComponent } from './tabs/first/first.component';
import { SecondComponent } from './tabs/second/second.component';
import { ThirdComponent } from './tabs/third/third.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [ReviewComponent, HeaderComponent, FirstComponent, SecondComponent, ThirdComponent, FooterComponent],
  imports: [
    CommonModule,
    ReviewRoutingModule,
    MatSlideToggleModule
  ]
})
export class ReviewModule { }
