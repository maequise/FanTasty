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

        public List<Recette> FindAll(int page)
        {
            List<Recette> recettes = this._recettes.Find(rec => true).Limit(3).Skip(page * 3).ToList();

            foreach (Recette recette in recettes) {
                foreach(IngredientRecette ingredient in recette.Ingredients)
                {
                    ingredient.Ingredient = this._ingredientRepository.FindById(ingredient.Id);
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
            var filter = Builders<Recette>.Filter.Where(recette => recette.Univers.ToLower() == univers.ToLower());

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
        
        public List<Recette> FindByUnivers(string univers, int page)
        {
            var builderFilter = Builders<Recette>.Filter;

            var whereFilter = builderFilter.Where(recette => recette.Univers.ToLower() == univers.ToLower());

            var filter = builderFilter.Empty;

            /*List<Recette> recettes = this._recettes.AsQueryable<Recette>()
                .Where(x => x.Univers.ToLower() == univers.ToLower())
               
                .ToList();
            */

            List<Recette> recettes = this._recettes.Find(whereFilter).Limit(3).Skip(page * 3).ToList();
           
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
            var builder = Builders<Recette>.Filter;
            var filter = builder.Empty;

            if (!string.IsNullOrWhiteSpace(tag.Saison))
            {
                var SeasonFilter = builder.Eq(rec => rec.Tags.Saison, tag.Saison);
                filter &= SeasonFilter;
            }

            if (!string.IsNullOrWhiteSpace(tag.TypePlat))
            {
                var TypePlatFilter = builder.Eq(rec => rec.Tags.TypePlat, tag.TypePlat);
                filter &= TypePlatFilter;
            }

            if (tag.Difficulte!=0)
            {
                var DifficulteFilter = builder.Eq(rec => rec.Tags.Difficulte, tag.Difficulte);
                filter &= DifficulteFilter;
            }

            if (tag.Cout != 0)
            {
                var CoutFilter = builder.Eq(recette => recette.Tags.Cout, tag.Cout);
                filter &= CoutFilter;
            }
            
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
