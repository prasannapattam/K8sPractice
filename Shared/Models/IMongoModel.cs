using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Shared.Models
{
    public class IMongoModel
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
    }
}
