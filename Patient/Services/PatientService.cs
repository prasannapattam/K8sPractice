using Patient.Models;
using Shared.Models;
using Shared.Services;

namespace Patient.Services
{
    public class PatientService: MongoService<PatientModel>
    {
        public PatientService(IMongoDatabaseSettings settings): base(settings)
        {
        }
        public void Initialize()
        {
            base.RemoveAll();
            base.Create(new PatientModel() { Id = "5e2984378b793f29cc30f1b4", Name = "Ninja", Phone = "1234567890" });
        }
    }
}

