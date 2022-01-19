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

        [BsonElement("nom")]
        public string Nom { get; set; }

        [BsonElement("auteur")]
        public string Auteur { get; set; }

        [BsonElement("univers")]
        public string Univers { get; set; }

        [BsonElement("ingredients")]
        public List<IngredientRecette> Ingredients { get; set;}

        [BsonElement("ustensiles")]
        public List<string> Ustensiles { get; set; }

        [BsonElement("nombrePersonnes")]
        public string NombrePersonnes { get; set; } //Faire un int nullable

        [BsonElement("temps")]
        public Temps Temps { get; set; }

        [BsonElement("tags")]
        public Tag Tags { get; set; }

        [BsonElement("photo")]
        public string Photo { get; set; }

        [BsonElement("etapePreparation")]
        public List<string> Etapes { get; set; }

    }

    public record Temps
    {
        [BsonElement("tempsPreparation")]
        public string TempsPreparation { get; set; }
        [BsonElement("tempsCuisson")]
        public string TempsCuisson { get; set; }
        [BsonElement("tempsTotal")]
        public string TempsTotal { get; set; }
    }

    public record Tag
    {
        [BsonElement("typePlat")]
        public string TypePlat { get; set; }
        [BsonElement("difficulte")]
        public string Difficulte { get; set; }
        [BsonElement("cout")]
        public string Cout { get; set; }
        [BsonElement("saison")]
        public string Saison { get; set; }
    }

    public record IngredientRecette
    {
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonIgnore]
        public Ingredient Ingredient { get; set; }

        [BsonElement("unite")]
        public string Unite { get; set; }
        [BsonElement("quantite")]
        public string Quantite { get; set; } //Faire un truc pour le mettre en double
    }


}
