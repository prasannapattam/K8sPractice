using Doctor.Models;
using Shared.Models;
using Shared.Services;

namespace Doctor.Services
{
    public class DoctorService: MongoService<DoctorModel>
    {
        public DoctorService(IMongoDatabaseSettings settings): base(settings)
        {

        }
    }
}

