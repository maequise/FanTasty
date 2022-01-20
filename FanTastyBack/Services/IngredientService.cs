using FanTastyBack.Exceptions;
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
            if(ingredients == null || ingredients.Count == 0)
            {
                throw new NotFoundException("Not found.");
            }
            return ingredients;
        }

        public Ingredient FindById(string id)
        {
            Ingredient ingredient = this._repository.FindById(id);
            if(ingredient == null)
            {
                throw new NotFoundException("Not found.");
            }
            return ingredient;
        }

        public Ingredient FindByName(string nom)
        {
            Ingredient ingredient = this._repository.FindByName(nom);
            if (ingredient == null)
            {
                throw new NotFoundException("Not found.");
            }
            return ingredient;
        }

        public Ingredient Update(string id, Ingredient ingredient)
        {
            return this._repository.Update(id, ingredient);
        }
        
        public Ingredient Create(Ingredient ingredient)
        {
            return this._repository.Create(ingredient);
        }

        public void Delete(string id)
        {
            this._repository.Delete(id);
        }
    }
}
