import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ChatComponent } from './chat/chat.component';
import { TimerComponent } from './timer/timer.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { UsernameComponent } from './chat/username/username.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightDirective } from '../shared/highlight.directive';
import { AuditComponent } from './audit/audit.component';
import { ReviewModule } from './review/review.module';

@NgModule({
  declarations: [PagesComponent,
                ChatComponent,
                TimerComponent,
                UsernameComponent,
                HighlightDirective,
                AuditComponent, ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSnackBarModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    ReviewModule,

  ],
  entryComponents: [ UsernameComponent ]
})
export class PagesModule { }
