﻿using FanTastyBack.Models;
using System.Collections.Generic;

namespace FanTastyBack.Repositories.Interfaces
{
    public interface IUtilisateurRepository
    {
        public List<Utilisateur> FindAll();

    }
}
