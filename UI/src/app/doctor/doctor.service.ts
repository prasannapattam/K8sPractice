import { Doctor } from "./doctor.model"


export class DoctorService {
    private doctors: Doctor[] = [
        { id: '1', name: 'Praval', speciality: 'Surgeon' },
        { id: '2', name: 'Prakul', speciality: 'Physician' },
    ]

    getDoctors(): Doctor[]  {
        return this.doctors;
    }

    addDoctor(doctor: Doctor) {
        doctor.id = Math.random().toString();
        this.doctors.push(doctor);
    }

    updateDoctor(doctor: Doctor) {
        // for now do nothing
    }

    deleteDoctor(doctor: Doctor): void {
        this.doctors = this.doctors.filter((value,key)=>{
            return value.id != doctor.id;
          });
    }
}