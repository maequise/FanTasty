using FanTastyBack.Config;
using FanTastyBack.Models;
using FanTastyBack.Repositories.Interfaces;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

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

        public Utilisateur Login(string email, string password)
        {
            /*Utilisateur user = this._utilisateur.AsQueryable<Utilisateur>()
                .Where(user => user.Email.Equals(email) && user.MotDePasse.Equals(password))
                .FirstOrDefault();*/
            
            Utilisateur user = this._utilisateur.AsQueryable<Utilisateur>()
                .Where(user => user.Email.Equals(email))
                .FirstOrDefault();

            return user;
        }

        public List<Utilisateur> FindAll()
        {
            List<Utilisateur> utilisateurs = this._utilisateur.Find(utili => true).ToList();
            return utilisateurs;
        }

        public Utilisateur FindById(string id)
        {
            Utilisateur utilisateur = this._utilisateur.Find(utili => utili.Id == id).FirstOrDefault();
            return utilisateur;
        }

        public void Create(Utilisateur utilisateur)
        {
            _utilisateur.InsertOne(utilisateur);
        }

        public void Delete(string id)
        {
            _utilisateur.DeleteOne(utilisateur => utilisateur.Id == id);
        }

        public Utilisateur Update(string id, Utilisateur utilisateur)
        {
            utilisateur.Id = id;
            _utilisateur.ReplaceOne(utili => utili.Id == id, utilisateur);
            return utilisateur;
        }

        public void AjoutRecetteFavoris(string idUtilisateur, string idRecette)
        {
            Utilisateur utilisateur = this._utilisateur.Find(utili => utili.Id == idUtilisateur).FirstOrDefault();
            if(utilisateur.RecetteFavoris == null)
            {
                utilisateur.RecetteFavoris = new List<string>();
            }
            utilisateur.RecetteFavoris.Add(idRecette);
            _utilisateur.ReplaceOne(utili => utili.Id == idUtilisateur, utilisateur);
        }

        public List<string> FindAllRecetteFavoris(string idUtilisateur)
        {
            Utilisateur utilisateur = this._utilisateur.Find(utili => utili.Id == idUtilisateur).FirstOrDefault();
            List<string> recettesFavoris = utilisateur.RecetteFavoris;
            return recettesFavoris;
        }

        public void DeleteRecetteFavoris(string idUtilisateur, string idRecette)
        {
            Utilisateur utilisateur = this._utilisateur.Find(utili => utili.Id == idUtilisateur).FirstOrDefault();
            utilisateur.RecetteFavoris.Remove(idRecette);
            _utilisateur.ReplaceOne(utili => utili.Id == idUtilisateur, utilisateur);
        }

    }
}
