import { Component, ViewChild } from '@angular/core';
import { AppointmentService } from './appointment.service';
import { Appointment } from './appointment.model';
import { MatDialog } from '@angular/material/dialog';
import { AppointmentDialogComponent } from './appointment.dialog.component';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AppointmentViewModel } from './appointment.view.model';

@Component({
  selector: 'appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
})
export class AppointmentComponent {
  public appointmentViewModel: AppointmentViewModel;
  public appointments: Appointment[];
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;

  constructor(private service: AppointmentService, private route: ActivatedRoute, private dialog: MatDialog) { 
    this.appointmentViewModel = this.route.snapshot.data['appointmentViewModel'];
    this.appointments = this.appointmentViewModel.appointments;
  }

  onAdd(): void {
    this.showDialog(<Appointment>{}, "add");
  }

  onEdit(appointment: Appointment): void {
    this.showDialog(appointment, "edit");
  }

  onDelete(appointment: Appointment): void {
    this.showDialog(appointment, "delete");
  }

  showDialog(appointment: Appointment, action: string): void {
    let data: Appointment = Object.assign({}, appointment, { action: action });
    const dialogRef = this.dialog.open(AppointmentDialogComponent, {
      width: '275px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result != undefined) {
        Object.assign(appointment, result);
        let req: Observable<Appointment[]>;
        switch(action) {
          case "add":
            req = this.service.addAppointment(appointment);
            break;
          case "edit":
            req = this.service.updateAppointment(appointment);
            break;
          case  "delete":
            req = this.service.deleteAppointment(appointment);
            break;
        }
        req.subscribe(appointments => {
          this.table.dataSource = appointments;
          this.table.renderRows();
          });
      }
    });
  }
}
