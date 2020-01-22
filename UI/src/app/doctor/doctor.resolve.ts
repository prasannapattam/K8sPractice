import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { DoctorService } from './doctor.service';
import { Doctor } from './doctor.model';

@Injectable()
export class DoctorResolve implements Resolve<Doctor[]> {

  constructor(private service: DoctorService) {}

  resolve(route: ActivatedRouteSnapshot): Doctor[] {
    return this.service.getDoctors();
  }
}
