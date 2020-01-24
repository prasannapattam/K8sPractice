using Patient.Models;
using Shared.Models;
using Shared.Services;

namespace Patient.Services
{
    public class PatientMongoService: MongoService<PatientModel>
    {
        public PatientMongoService(IMongoDatabaseSettings settings): base(settings)
        {

        }
    }
}

