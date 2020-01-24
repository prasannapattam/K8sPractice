using Shared.Models;

namespace Patient.Models
{
    public class PatientModel: IMongoModel
    {
        public string Name { get; set; }

        public string Phone { get; set; }
    }
}
