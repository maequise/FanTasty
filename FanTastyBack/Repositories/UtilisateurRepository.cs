using FanTastyBack.Config;
using FanTastyBack.Models;
using FanTastyBack.Repositories.Interfaces;
using MongoDB.Driver;
using System.Collections.Generic;

namespace FanTastyBack.Repositories
{
    public class UtilisateurRepository : IUtilisateurRepository
    {
        private readonly IMongoCollection<Utilisateur> _utilisateur;

        public UtilisateurRepository(IFantastyDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _utilisateur = database.GetCollection<Utilisateur>(settings.UtilisateursCollectionName);
        }

        public List<Utilisateur> FindAll()
        {
            List<Utilisateur> utilisateurs = this._utilisateur.Find(ingr => true).ToList();
            return utilisateurs;
        }

        public Utilisateur FindById(string id)
        {
            Utilisateur utilisateur = this._utilisateur.Find(ingr => ingr.Id == id).FirstOrDefault();
            return utilisateur;
        }

    }
}
