using FanTastyBack.Config;
using FanTastyBack.Models;
using FanTastyBack.Repositories.Interfaces;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;

namespace FanTastyBack.Repositories
{
    public class RecetteRepository : IRecetteRepository
    {
        private readonly IMongoCollection<Recette> _recettes;
        private readonly IIngredientRepository _ingredientRepository;

        public RecetteRepository(IFantastyDatabaseSettings settings, IIngredientRepository ingredientRepository)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _recettes = database.GetCollection<Recette>(settings.RecettesCollectionName);
            _ingredientRepository = ingredientRepository;
        }

        public List<Recette> FindAll()
        {
            List<Recette> recettes = this._recettes.Find(rec => true).ToList();
            for (int i = 0; i < recettes.Count; i++)
            {
                foreach (IngredientRecette ingr in recettes[i].Ingredients)
                {
                    ingr.Ingredient = this._ingredientRepository.FindById(ingr.Id);
                }
            }
            return recettes;
        }

        public Recette FindById(string id)
        {
            Recette recette = this._recettes.Find(rec => rec.Id == id).FirstOrDefault();
            foreach (IngredientRecette ingr in recette.Ingredients)
            {
                ingr.Ingredient = this._ingredientRepository.FindById(ingr.Id);
            }
            return recette;
        }

        public Recette FindByName(string nom)
        {
            Recette recette = this._recettes.Find(rec => rec.Nom == nom).FirstOrDefault();
            foreach (IngredientRecette ingr in recette.Ingredients)
            {
                ingr.Ingredient = this._ingredientRepository.FindById(ingr.Id);
            }
            return recette;
        }

        public List<Recette> FindByUnivers(string univers)
        {
            List<Recette> recettes = this._recettes.AsQueryable<Recette>()
                .Where(x => x.Univers.ToLower() == univers.ToLower())
                .ToList();
           
            for (int i = 0; i < recettes.Count; i++)
            {
                foreach (IngredientRecette ingr in recettes[i].Ingredients)
                {
                    ingr.Ingredient = this._ingredientRepository.FindById(ingr.Id);
                }
            }
            return recettes;
        }

        public List<Recette> FindByAuteur(string auteur)
        {
            List<Recette> recettes = this._recettes.Find(rec => rec.Auteur == auteur).ToList();
            for (int i = 0; i < recettes.Count; i++)
            {
                foreach (IngredientRecette ingr in recettes[i].Ingredients)
                {
                    ingr.Ingredient = this._ingredientRepository.FindById(ingr.Id);
                }
            }
            return recettes;
        }

        public List<Recette> FindByTag(Models.Tag tag)
        {
            FilterDefinition<Recette> filterSaison = null;
            FilterDefinition<Recette> filterTypePlat = null;
            FilterDefinition<Recette> filterDifficulty = null;
            FilterDefinition<Recette> filterCost = null;

            var builder = Builders<Recette>.Filter;           

            if (!string.IsNullOrWhiteSpace(tag.Saison))
            {
                filterSaison = builder.Eq(rec => rec.Tags.Saison, tag.Saison);
            }

            if (!string.IsNullOrWhiteSpace(tag.TypePlat))
            {
                filterTypePlat = builder.Eq(rex => rex.Tags.TypePlat, tag.TypePlat);
            }

            if (tag.Difficulte!=0)
            {
                filterDifficulty = builder.Eq(rec => rec.Tags.Difficulte, tag.Difficulte);
            }

            if (tag.Cout != 0)
            {
                filterCost = builder.Eq(recette => recette.Tags.Cout, tag.Cout);
            }

            if(filterSaison == null)
            {
                filterSaison = builder.Empty;
            }

            if(filterCost == null)
            {
                filterCost = builder.Empty;
            }

            if(filterDifficulty == null)
            {
                filterDifficulty = builder.Empty;
            }

            if(filterTypePlat == null)
            {
                filterTypePlat = builder.Empty;
            }

            List<Recette> recettes = this._recettes.Find(filterSaison & filterTypePlat & filterCost & filterDifficulty).ToList();

            for (int i = 0; i < recettes.Count; i++)
            {
                foreach (IngredientRecette ingr in recettes[i].Ingredients)
                {
                    ingr.Ingredient = this._ingredientRepository.FindById(ingr.Id);
                }
            }
            return recettes;
        }

        public List<Recette> FindByIngredient(string ingredient)
        {
            var filter = Builders<Recette>.Filter.ElemMatch(rec => rec.Ingredients, ingr => ingr.Id == ingredient);
            List<Recette> recettes = this._recettes.Find(filter).ToList();
            for (int i = 0; i < recettes.Count; i++)
            {
                foreach (IngredientRecette ingr in recettes[i].Ingredients)
                {
                    ingr.Ingredient = this._ingredientRepository.FindById(ingr.Id);
                }
            }
            return recettes;
        }

        public List<Recette> FindByUstensile(string ustensile)
        {
            var filter = Builders<Recette>.Filter.AnyEq(rec => rec.Ustensiles, ustensile);

            List<Recette> recettes = this._recettes.Find(filter).ToList();
            for (int i = 0; i < recettes.Count; i++)
            {
                foreach (IngredientRecette ingr in recettes[i].Ingredients)
                {
                    ingr.Ingredient = this._ingredientRepository.FindById(ingr.Id);
                }
            }
            return recettes;
        }

            public Recette Create(Recette recette)
        {
            _recettes.InsertOne(recette);
            return recette;
        }

        public void Delete(string id)
        {
            _recettes.DeleteOne(rec => rec.Id == id);

        }

        public Recette Update(string id, Recette recette)
        {
            recette.Id = id;
            _recettes.ReplaceOne(rec => rec.Id == id, recette);
            return recette;
        }
    }
}
