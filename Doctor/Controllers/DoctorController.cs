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
        private readonly DoctorService doctorService;

        public DoctorController(DoctorService doctorService)
        {
            this.doctorService = doctorService;
        }

        public string Index()
        {
            return "Regular Doctor";
        }
        public string GetDoctor()
        {
            return "Specialist Doctor";
        }

        [HttpGet]
        public ActionResult<List<DoctorModel>> GetAll() =>
            doctorService.Get();
    }
}