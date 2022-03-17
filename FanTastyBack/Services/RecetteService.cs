using FanTastyBack.Exceptions;
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
            if(recettes == null || recettes.Count == 0)
            {
                throw new NotFoundException("Not found.");
            }
            return recettes;
        }

        public Recette FindById(string id)
        {
            Recette recette = this._repository.FindById(id);
            if(recette == null)
            {
                throw new NotFoundException("Not found.");
            }
            return recette;
        }

        public Recette FindByName(string nom)
        {
            Recette recette = this._repository.FindByName(nom);
            if (recette == null)
            {
                throw new NotFoundException("Not found.");
            }
            return recette;
        }

        public List<Recette> FindByUnivers(string univers)
        {
            List<Recette> recettes = this._repository.FindByUnivers(univers);
            if (recettes == null || recettes.Count == 0)
            {
                throw new NotFoundException("Not found.");
            }
            return recettes;
        }

        public List<Recette> FindByAuteur(string auteur)
        {
            List<Recette> recettes = this._repository.FindByAuteur(auteur);
            if (recettes == null || recettes.Count == 0)
            {
                throw new NotFoundException("Not found.");
            }
            return recettes;
        }

        public List<Recette> FindByTag(Tag tag)
        {
            List<Recette> recettes = this._repository.FindByTag(tag);
            if (recettes == null || recettes.Count == 0)
            {
                throw new NotFoundException("Not found.");
            }
            return recettes;
        }

        public List<Recette> FindByTags(SearchedTag tags)
        {
            List<Recette> recettes = this._repository.FindByTags(tags);
            if (recettes == null || recettes.Count == 0)
            {
                throw new NotFoundException("Not found.");
            }
            return recettes;
        }

        public List<Recette> FindByIngredient(string ingredient)
        {
            List<Recette> recettes = this._repository.FindByIngredient(ingredient);
            if (recettes == null || recettes.Count == 0)
            {
                throw new NotFoundException("Not found.");
            }
            return recettes;
        }

        public List<Recette> FindByUstensile(string ustensile)
        {
            List<Recette> recettes = this._repository.FindByUstensile(ustensile);
            if (recettes == null || recettes.Count == 0)
            {
                throw new NotFoundException("Not found.");
            }
            return recettes;
        }

        public Recette Create(Recette recette)
        {
            return this._repository.Create(recette);
        }

        public void Delete(string id)
        {
            this._repository.Delete(id);
        }
        public Recette Update(string id, Recette recette)
        {
            return this._repository.Update(id, recette);
        }

        public List<Recette> RecettesCarrousel()
        {
            List<Recette> reccettesCarrousel = this._repository.RecettesCarrousel();

            return reccettesCarrousel;
        }
    }
}
