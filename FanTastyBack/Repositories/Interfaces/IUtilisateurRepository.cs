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

    }
}
