using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;

namespace FanTastyBack.Models
{
    public class Recette
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        public string Nom { get; set; }

        public string Auteur { get; set; }

        public string Univers { get; set; }

        public List<IngredientRecette> Ingredients { get; set;}

        public List<string> Ustensiles { get; set; }

        public int NombrePersonnes { get; set; }

        public Temps Temps { get; set; }

        public Tag Tags { get; set; }

        public string Photo { get; set; }

        [BsonElement("etapePreparation")]
        public List<string> Etapes { get; set; }

    }

    public record Temps
    {
        public string TempsPreparation { get; set; }
        public string TempsCuisson { get; set; }
        public string TempsTotal { get; set; }
    }

    public record Tag
    {
        public string TypePlat { get; set; }
        public int Difficulte { get; set; }
        public int Cout { get; set; }
        public string Saison { get; set; }
    }

    public record IngredientRecette
    {
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonIgnore]
        public Ingredient Ingredient { get; set; }

        public string Unite { get; set; }
        public double Quantite { get; set; }
    }
}
