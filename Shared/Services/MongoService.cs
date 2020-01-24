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
            collection.Find(m => true).ToList();

        public TModel Get(string id) =>
            collection.Find<TModel>(m => m.Id == id).FirstOrDefault();

        public TModel Create(TModel model)
        {
            collection.InsertOne(model);
            return model;
        }

        public void Update(string id, TModel model) =>
            collection.ReplaceOne(m => m.Id == id, model);

        public void Remove(TModel model) =>
            collection.DeleteOne(m => m.Id == model.Id);

        public void Remove(string id) =>
            collection.DeleteOne(m => m.Id == id);
    }
}
