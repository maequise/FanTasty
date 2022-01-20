using FanTastyBack.Models;
using System.Collections.Generic;

namespace FanTastyBack.Repositories.Interfaces
{
    public interface IIngredientRepository
    {
        public List<Ingredient> FindAll();

        public Ingredient FindById(string id);
    }
}
