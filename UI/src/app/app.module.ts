import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuControl } from './controls/menu.control';
import { PatientComponent } from './patient/patient.component';
import { HomeComponent } from './home.component';
import { ButtonControl } from './controls/button.control';
import { MenuItem } from './controls/menu.item';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorService } from './doctor/doctor.service';
import { PatientService } from './patient/patient.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    MenuControl,
    HomeComponent,
    PatientComponent,
    DoctorComponent,
    ButtonControl,
    MenuItem
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [
    DoctorService,
    PatientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
