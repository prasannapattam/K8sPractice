import { Doctor } from "./doctor.model"


export class DoctorService {
    private doctors: Doctor[] = [
        { id: '1', name: 'Praval', speciality: 'Surgeon' },
        { id: '2', name: 'Prakul', speciality: 'Physician' },
    ]

    getDoctors(): Doctor[]  {
        return this.doctors;
    }
}