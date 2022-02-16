using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;

namespace FanTastyBack.Models
{
    public class Utilisateur
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        public string Nom { get; set; }

        public string Prenom { get; set; }  

        public string Email { get; set; }   

        public string MotDePasse { get; set; }  

        [BsonRepresentation(BsonType.ObjectId)]
        public List<string> RecetteFavoris { get; set; } = new List<string>();

        [BsonRepresentation(BsonType.ObjectId)]
        public List<string> PreferenceIngredients { get; set; }

        public Utilisateur(string id, string nom, string prenom, string email)
        {
            Id = id;
            Nom = nom;
            Prenom = prenom;
            Email = email;

        }

    }
}
