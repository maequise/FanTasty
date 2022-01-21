using FanTastyBack.Models;
using System.Collections.Generic;

namespace FanTastyBack.Services.Interfaces
{
    public interface IRecetteService
    {
        public List<Recette> FindAll();

        public Recette FindById(string id);

        public Recette FindByName(string nom);

        public Recette Create(Recette recette);

        public Recette Update(string id, Recette recette);

        void Delete(string id);
    }
}
