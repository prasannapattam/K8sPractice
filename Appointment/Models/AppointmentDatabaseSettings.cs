using Shared.Models;

namespace Appointment.Models
{
    public class AppointmentDatabaseSettings : MongoDatabaseSettings, IAppointmentDatabaseSettings
    {
        public string DoctorCollectionName { get; set; }
        public string PatientCollectionName { get; set; }
    }

    public interface IAppointmentDatabaseSettings: IMongoDatabaseSettings
    {
        string DoctorCollectionName { get; set; }
        string PatientCollectionName { get; set; }
    }
}
