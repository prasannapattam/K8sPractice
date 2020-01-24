import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorResolve } from './doctor/doctor.resolve';
import { PatientComponent } from './patient/patient.component';
import { PatientResolve } from './patient/patient.resolve';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { 
    path: 'patient', 
    component: PatientComponent,
    resolve: {
      patients: PatientResolve
    }
  },
  { 
    path: 'doctor', 
    component: DoctorComponent,
    resolve: {
      doctors: DoctorResolve
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
