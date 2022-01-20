using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

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

    }
}
