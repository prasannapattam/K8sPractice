import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientComponent } from './patient.component';
import { HomeComponent } from './home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'patient', component: PatientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
