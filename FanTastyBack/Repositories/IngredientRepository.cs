using FanTastyBack.Config;
using FanTastyBack.Models;
using FanTastyBack.Repositories.Interfaces;
using MongoDB.Driver;
using System.Collections.Generic;

namespace FanTastyBack.Repositories
{
    public class IngredientRepository : IIngredientRepository
    {
        private readonly IMongoCollection<Ingredient> _ingredients;

        public IngredientRepository(IFantastyDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _ingredients = database.GetCollection<Ingredient>(settings.IngredientsCollectionName);
        }

        public List<Ingredient> FindAll()
        {
            List<Ingredient> ingredients = this._ingredients.Find(ingr => true).ToList();
            return ingredients;
        }

        public Ingredient FindById(string id)
        {
            Ingredient ingredient = this._ingredients.Find(ingr => ingr.Id == id).FirstOrDefault();
            return ingredient;
        }
    }
}
