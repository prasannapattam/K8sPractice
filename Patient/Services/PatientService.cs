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
    }
}

