using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;

namespace FanTastyBack.Models
{
    public class Ingredient
    {

        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        
        [BsonElement("nom")]
        public string Nom { get; set; }
        
        [BsonElement("image")]
        public string Image { get; set; }
        
        public Ingredient(string id, string nom, string image, List<string> unites)
        {
            Id = id;
            Nom = nom;
            Image = image;
        }
    }
}
