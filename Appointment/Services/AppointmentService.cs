using Appointment.Models;
using Shared.Models;
using Shared.Services;

namespace Appointment.Services
{
    public class AppointmentService: MongoService<AppointmentModel>
    {
        public AppointmentService(IMongoDatabaseSettings settings) : base(settings)
        {

        }
    }
}
