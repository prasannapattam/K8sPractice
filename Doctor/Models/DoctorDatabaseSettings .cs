using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Doctor.Models
{
    public class DoctorDatabaseSettings : IDoctorDatabaseSettings
    {
        public string DoctorsCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

    public interface IDoctorDatabaseSettings
    {
        string DoctorsCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}
