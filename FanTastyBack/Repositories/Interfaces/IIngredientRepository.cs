using FanTastyBack.Models;
using System.Collections.Generic;

namespace FanTastyBack.Repositories.Interfaces
{
    public interface IIngredientRepository
    {
        public List<Ingredient> FindAll();

        public Ingredient FindById(string id);

        public Ingredient FindByName(string nom);

        public Ingredient Create(Ingredient ingredient);

        public Ingredient Update(string id, Ingredient ingredient);

        void Delete(string id);
    }
}
