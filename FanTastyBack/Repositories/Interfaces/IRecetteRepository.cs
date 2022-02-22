﻿using FanTastyBack.Models;
using System.Collections.Generic;

namespace FanTastyBack.Repositories.Interfaces
{
    public interface IRecetteRepository
    {
        public List<Recette> FindAll();

        public List<Recette> FindAll(int page);

        public Recette FindById(string id);

        public Recette FindByName(string nom);

        public List<Recette> FindByUnivers(string univers);
        
        public List<Recette> FindByUnivers(string univers, int page);

        public List<Recette> FindByAuteur(string auteur);

        public List<Recette> FindByTag(Tag tag);

        public List<Recette> FindByIngredient(string ingredient);

        public List<Recette> FindByUstensile(string ustensile);

        public Recette Create(Recette recette);

        public Recette Update(string id, Recette recette);

        void Delete(string id);
    }
}
