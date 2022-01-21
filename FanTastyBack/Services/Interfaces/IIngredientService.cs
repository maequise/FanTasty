using FanTastyBack.Models;
using System.Collections.Generic;

namespace FanTastyBack.Services.Interfaces
{
    public interface IIngredientService
    {
        public List<Ingredient> FindAll();

        public Ingredient FindById(string id);

        public Ingredient FindByName(string nom);

        public Ingredient Create(Ingredient ingredient);

        public Ingredient Update(string id, Ingredient ingredient);

        void Delete(string id);
    }
}
