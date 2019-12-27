using Microsoft.AspNetCore.Mvc;

namespace Patient.Controllers
{
    [ApiController]
    [Route("{controller=patient}/{action=index}")]
    public class PatientController : ControllerBase
    {
        public string Index()
        {
            return "Regular Patient";    
        }
        public string GetPatient()
        {
            return "Sick Patient";
        }
    }
}