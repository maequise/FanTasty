using FanTastyBack.Models;
using FanTastyBack.Repositories.Interfaces;
using FanTastyBack.Services.Interfaces;
using System.Collections.Generic;

namespace FanTastyBack.Services
{
    public class IngredientService : IIngredientService
    {
        private readonly IIngredientRepository _repository;

        public IngredientService(IIngredientRepository repository)
        {
            this._repository = repository;
        }

        public List<Ingredient> FindAll()
        {
            List<Ingredient> ingredients = this._repository.FindAll();
            return ingredients;
        }

        public Ingredient FindById(string id)
        {
            Ingredient ingredient = this._repository.FindById(id);
            return ingredient;
        }
    }
}
