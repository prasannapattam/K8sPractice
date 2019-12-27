using Microsoft.AspNetCore.Mvc;

namespace Doctor.Controllers
{
    [ApiController]
    [Route("{controller=doctor}/{action=index}")]
    public class DoctorController : ControllerBase
    {
        public string Index()
        {
            return "Regular Doctor";
        }
        public string GetDoctor()
        {
            return "Specialist Doctor";
        }
    }
}