using FanTastyBack.Models;
using FanTastyBack.Repositories.Interfaces;
using FanTastyBack.Services.Interfaces;
using System.Collections.Generic;

namespace FanTastyBack.Services
{
    public class RecetteService : IRecetteService
    {
        private readonly IRecetteRepository _repository;

        public RecetteService(IRecetteRepository repository)
        {
            this._repository = repository;
        }

        public List<Recette> FindAll()
        {
            List<Recette> recettes = this._repository.FindAll();
            return recettes;
        }
     }
}
