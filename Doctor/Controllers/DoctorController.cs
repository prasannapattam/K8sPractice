using Doctor.Models;
using Doctor.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Doctor.Controllers
{
    [ApiController]
    [Route("{controller=doctor}/{action=index}")]
    public class DoctorController : ControllerBase
    {
        private readonly DoctorMongoService doctorService;

        public DoctorController(DoctorMongoService doctorService)
        {
            this.doctorService = doctorService;
        }

        public string Index()
        {
            return "Doctor Service Started";            
        }

        [HttpGet]
        public ActionResult<List<DoctorModel>> GetAll() =>
            doctorService.Get();
    }
}