import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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

import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { DoctorDialogComponent } from './doctor/doctor.dialog.component';
import {MatInputModule} from '@angular/material/input';
import { DoctorResolve } from './doctor/doctor.resolve';


@NgModule({
  declarations: [
    AppComponent,
    MenuControl,
    HomeComponent,
    PatientComponent,
    DoctorComponent,
    DoctorDialogComponent,
    ButtonControl,
    MenuItem
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule
  ],
  entryComponents: [
    DoctorDialogComponent
  ],
  providers: [
    DoctorService,
    DoctorResolve,
    PatientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
