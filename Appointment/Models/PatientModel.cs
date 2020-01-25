using Shared.Models;

namespace Appointment.Models
{
    public class PatientModel : IMongoModel
    {
        public string Name { get; set; }
    }
}
