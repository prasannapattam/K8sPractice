import { Component, ViewChild } from '@angular/core';
import { DoctorService } from './doctor.service';
import { Doctor } from './doctor.model';
import { MatDialog } from '@angular/material/dialog';
import { DoctorDialogComponent } from './doctor.dialog.component';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css'],
})
export class DoctorComponent {
  public doctors: Doctor[];
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;

  constructor(private service: DoctorService, private route: ActivatedRoute, private dialog: MatDialog) { 
    this.doctors = this.route.snapshot.data['doctors'];
  }

  onAdd(): void {
    this.showDialog(<Doctor>{}, "add");
  }

  onEdit(doctor: Doctor): void {
    this.showDialog(doctor, "edit");
  }

  onDelete(doctor: Doctor): void {
    this.showDialog(doctor, "delete");
  }

  showDialog(doctor: Doctor, action: string): void {
    let data: Doctor = Object.assign({}, doctor, { action: action });
    const dialogRef = this.dialog.open(DoctorDialogComponent, {
      width: '275px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result != undefined) {
        Object.assign(doctor, result);
        switch(action) {
          case "add":
            this.service.addDoctor(doctor);
            break;
          case "edit":
            this.service.updateDoctor(doctor);
            break;
          case  "delete":
            this.service.deleteDoctor(doctor);
            break;
        }
        this.table.dataSource = this.service.getDoctors();
        this.table.renderRows();
      }
    });
  }
}
