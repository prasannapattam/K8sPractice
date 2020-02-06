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
        public void Initialize()
        {
            base.RemoveAll();
            base.Create(new DoctorModel() { Id = "5e2a863f89e6ad5890addc8a", Name = "Praval", Speciality = "Surgeon" });
            base.Create(new DoctorModel() { Id = "5e2a865289e6ad5890addc8b", Name = "Prakul", Speciality = "Physician" });
        }
    }
}

