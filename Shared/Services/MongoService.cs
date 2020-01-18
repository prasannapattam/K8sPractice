using Microsoft.Extensions.DependencyInjection;
using MongoDB.Driver;
using Shared.Models;
using System.Collections.Generic;

namespace Shared.Services
{
    public class MongoService<TModel>
        where TModel: IMongoModel
    {
        private readonly IMongoCollection<TModel> collection;

        public MongoService(IMongoDatabaseSettings settings)
        {
            MongoClient client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            collection = database.GetCollection<TModel>(settings.CollectionName);
        }

        public List<TModel> Get() =>
            collection.Find(doctor => true).ToList();

        public TModel Get(string id) =>
            collection.Find<TModel>(doctor => doctor.Id == id).FirstOrDefault();

        public TModel Create(TModel doctor)
        {
            collection.InsertOne(doctor);
            return doctor;
        }

        public void Update(string id, TModel doctorIn) =>
            collection.ReplaceOne(doctor => doctor.Id == id, doctorIn);

        public void Remove(TModel doctorIn) =>
            collection.DeleteOne(doctor => doctor.Id == doctorIn.Id);

        public void Remove(string id) =>
            collection.DeleteOne(doctor => doctor.Id == id);
    }
}
