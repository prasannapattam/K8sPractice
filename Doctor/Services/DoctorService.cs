using Doctor.Models;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace Doctor.Services
{
    public class DoctorService
    {
        private readonly IMongoCollection<DoctorModel> doctors;

        public DoctorService(IDoctorDatabaseSettings settings)
        {
            MongoClient client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            doctors = database.GetCollection<DoctorModel>(settings.DoctorsCollectionName);
        }

        public List<DoctorModel> Get() =>
            doctors.Find(doctor => true).ToList();

        public DoctorModel Get(string id) =>
            doctors.Find<DoctorModel>(doctor => doctor.Id == id).FirstOrDefault();

        public DoctorModel Create(DoctorModel doctor)
        {
            doctors.InsertOne(doctor);
            return doctor;
        }

        public void Update(string id, DoctorModel doctorIn) =>
            doctors.ReplaceOne(doctor => doctor.Id == id, doctorIn);

        public void Remove(DoctorModel doctorIn) =>
            doctors.DeleteOne(doctor => doctor.Id == doctorIn.Id);

        public void Remove(string id) =>
            doctors.DeleteOne(doctor => doctor.Id == id);
    }
}

