﻿using FanTastyBack.Models;
using FanTastyBack.Repositories.Interfaces;
using FanTastyBack.Services.Interfaces;
using System.Collections.Generic;

namespace FanTastyBack.Services
{
    public class UtilisateurService : IUtilisateurService
    {
        private readonly IUtilisateurRepository _repository;

        public UtilisateurService(IUtilisateurRepository repository)
        {
            this._repository = repository;
        }

        public List<Utilisateur> FindAll()
        {
            List<Utilisateur> Utilisateurs = this._repository.FindAll();
            return Utilisateurs;
        }

        public Utilisateur FindById(string id)
        {
            Utilisateur utilisateur = this._repository.FindById(id);
            return utilisateur;
        }

    }
}