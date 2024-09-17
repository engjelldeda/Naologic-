import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketEditPanelComponent } from './components/ticket-edit-panel/ticket-edit-panel.component';
import { SubtaskListComponent } from './shared/subtask-list/subtask-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { IconComponent } from './shared/icon/icon.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    AppComponent,
    TicketEditPanelComponent,
    SubtaskListComponent,
    HeaderComponent,
    IconComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule ,
    ReactiveFormsModule,
    MatProgressBarModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
