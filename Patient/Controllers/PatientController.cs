using Patient.Models;
using Patient.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Patient.Controllers
{
    [ApiController]
    [Route("{controller=doctor}/{action=index}")]
    public class PatientController : ControllerBase
    {
        private readonly PatientMongoService service;

        public PatientController(PatientMongoService doctorService)
        {
            this.service = doctorService;
        }

        public string Index()
        {
            return "Patient Service Started";
        }

        [HttpPost]
        public List<PatientModel> GetAll() =>
            service.Get();

        [HttpPost]
        public PatientModel Get(string id) => service.Get(id);

        [HttpPost]
        public List<PatientModel> Add(PatientModel model)
        {
            service.Create(model);
            return GetAll();
        }

        [HttpPost]
        public List<PatientModel> Update(PatientModel model)
        {
            service.Update(model.Id, model);
            return GetAll();
        }

        [HttpPost]
        public List<PatientModel> Delete(PatientModel model)
        {
            service.Remove(model.Id);
            return GetAll();
        }
    }
}