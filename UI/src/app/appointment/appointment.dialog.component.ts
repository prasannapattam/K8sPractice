import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { Appointment } from './appointment.model';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'appointment-dialog',
  templateUrl: './appointment.dialog.component.html',
  styleUrls: ['./appointment.dialog.component.css'],
})
export class AppointmentDialogComponent {
    form: FormGroup;

    nameFormControl: FormControl = new FormControl('', [ Validators.required ]);

    constructor(public fb: FormBuilder, public dialogRef: MatDialogRef<AppointmentDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public appointment: Appointment) 
        { }

    ngOnInit() {
        let disabled: boolean = this.appointment["action"] == "delete"
        this.form = this.fb.group({
            patient: this.fb.group({
                name: [{value: this.appointment.patient.name, disabled: disabled}, Validators.required],
            }),
            doctor: this.fb.group({
                name: [{value: this.appointment.doctor.name, disabled: disabled}, Validators.required],
            }),
            appointmentDate: [{value: new Date(this.appointment.appointmentDate).toISOString().substring(0,10), disabled: disabled}, Validators.required]
        });
    }

    onSave() {
        if(this.form.valid || this.form.disabled) {
            Object.assign(this.appointment, this.form.value);
            this.dialogRef.close(this.appointment);
        }
    }

    onCancel(): void {
        this.dialogRef.close();
    }        
}
