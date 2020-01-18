import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuControl } from './controls/menu.control';
import { PatientComponent } from './patient.component';
import { HomeComponent } from './home.component';
import { ButtonControl } from './controls/button.control';
import { MenuItem } from './controls/menu.item';


@NgModule({
  declarations: [
    AppComponent,
    MenuControl,
    HomeComponent,
    PatientComponent,
    ButtonControl,
    MenuItem
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
