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

        public void Initialize()
        {
            doctorCollection.DeleteMany(m => true);
            doctorCollection.InsertOne(new DoctorModel() { Id = "5e2a863f89e6ad5890addc8a", Name = "Praval" });
            doctorCollection.InsertOne(new DoctorModel() { Id = "5e2a865289e6ad5890addc8b", Name = "Prakul" });

            patientCollection.DeleteMany(m => true);
            patientCollection.InsertOne(new PatientModel() { Id = "5e2984378b793f29cc30f1b4", Name = "Ninja" });
        }
    }
}
