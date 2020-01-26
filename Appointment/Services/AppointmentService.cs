using Appointment.Models;
using MongoDB.Driver;
using Shared.Services;
using System.Collections.Generic;

namespace Appointment.Services
{
    public class AppointmentService: MongoService<AppointmentModel>
    {
        private readonly IMongoCollection<DoctorModel> doctorCollection;
        private readonly IMongoCollection<PatientModel> patientCollection;

        public AppointmentService(IAppointmentDatabaseSettings settings) : base(settings)
        {
            doctorCollection = database.GetCollection<DoctorModel>(settings.DoctorCollectionName);
            patientCollection = database.GetCollection<PatientModel>(settings.PatientCollectionName);
        }

        public AppointmentViewModel GetViewModel()
        {
            return new AppointmentViewModel()
            {
                Appointments = Get(),
                Doctors = GetDoctors(),
                Patients = GetPatients()
            };
        }

        public List<DoctorModel> GetDoctors() =>
            doctorCollection.Find(m => true).ToList();

        public List<PatientModel> GetPatients() =>
            patientCollection.Find(m => true).ToList();
    }
}
