using Doctor.Models;
using Shared.Models;
using Shared.Services;

namespace Doctor.Services
{
    public class DoctorMongoService: MongoService<DoctorModel>
    {
        public DoctorMongoService(IMongoDatabaseSettings settings): base(settings)
        {

        }
    }
}

