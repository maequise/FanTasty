using FanTastyBack.Models;
using System.Collections.Generic;

namespace FanTastyBack.Repositories.Interfaces
{
    public interface IUtilisateurRepository
    {
        public List<Utilisateur> FindAll();

        public Utilisateur FindById(string id);

        public void Create(Utilisateur utilisateur);

        public void Delete(string id);

        public Utilisateur Update(string id, Utilisateur utilisateur);

        public void AjoutRecetteFavoris(string idUtilisateur, string idRecette);

        public List<string> FindAllRecetteFavoris(string idUtilisateur);

        public void DeleteRecetteFavoris(string idUtilisateur, string idRecette);
    }
}
