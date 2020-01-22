import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import { HomeComponent } from './home.component';
import { DoctorResolve } from './doctor/doctor.resolve';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { 
    path: 'patient', 
    component: PatientComponent,
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
