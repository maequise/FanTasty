using FanTastyBack.Models;
using System.Collections.Generic;

namespace FanTastyBack.Repositories.Interfaces
{
    public interface IRecetteRepository
    {
        public List<Recette> FindAll();
    }
}
