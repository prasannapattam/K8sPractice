import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { AppointmentService } from './appointment.service';
import { Appointment } from './appointment.model';
import { Observable } from 'rxjs';

@Injectable()
export class AppointmentResolve implements Resolve<Appointment[]> {

  constructor(private service: AppointmentService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Appointment[]> {
    return this.service.getAppointments();
  }
}
