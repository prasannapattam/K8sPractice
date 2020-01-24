import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuControl } from './controls/menu.control';
import { ButtonControl } from './controls/button.control';
import { MenuItem } from './controls/menu.item';
import { HomeComponent } from './home.component';

import { DoctorComponent } from './doctor/doctor.component';
import { DoctorService } from './doctor/doctor.service';
import { DoctorResolve } from './doctor/doctor.resolve';
import { DoctorDialogComponent } from './doctor/doctor.dialog.component';

import { PatientComponent } from './patient/patient.component';
import { PatientService } from './patient/patient.service';
import { PatientResolve } from './patient/patient.resolve';
import { PatientDialogComponent } from './patient/patient.dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonControl,
    MenuControl,
    MenuItem,
    HomeComponent,
    DoctorComponent,
    DoctorDialogComponent,
    PatientComponent,
    PatientDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule
  ],
  entryComponents: [
    DoctorDialogComponent,
    PatientDialogComponent
  ],
  providers: [
    DoctorService,
    DoctorResolve,
    PatientService,
    PatientResolve,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
