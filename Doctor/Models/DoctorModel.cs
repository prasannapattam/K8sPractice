using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Shared.Models;

namespace Doctor.Models
{
    public class DoctorModel: IMongoModel
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        public string Name { get; set; }

        public string Speciality { get; set; }
    }
}
