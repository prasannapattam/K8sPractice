import { Component, ViewEncapsulation } from '@angular/core';
import { DoctorService } from './doctor.service';
import { Doctor } from './doctor.model';

@Component({
  selector: 'doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class DoctorComponent {
  public doctors: Doctor[];
  public displayedColumns: string[] = ['name', 'speciality'];

  constructor(private service: DoctorService) { 
    this.doctors = service.getDoctors()
  }

}
