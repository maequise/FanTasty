using FanTastyBack.Models;
using FanTastyBack.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace FanTastyBack.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UtilisateursController : Controller
    {
        private readonly UtilisateurService _service;

        public UtilisateursController(UtilisateurService service)
        {
            _service = service;
        }

        [HttpGet]
        public IActionResult FindAll()
        {
            return Ok(this._service.FindAll());
        }

        [HttpGet("{id}")]
        public IActionResult FindById(string id)
        {
            return Ok(this._service.FindById(id));
        }

        [HttpPost]
        public IActionResult Create(Utilisateur utilisateur)
        {
            this._service.Create(utilisateur);
            return Ok("Utilisateur créer");
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            this._service.Delete(id);
            return Ok("Utilisateur Supprimé");
        }

        [HttpPut("{id}")]
        public IActionResult Update(string id, Utilisateur utilisateur)
        {
            this._service.Update(id, utilisateur);
            return Ok("Utilisateur modifié");
        }

        [HttpPut("{idUtilisateur}/{idRecette}")]
        public IActionResult AjoutRecetteFavoris(string idUtilisateur, string idRecette)
        {
            this._service.AjoutRecetteFavoris(idUtilisateur, idRecette);
            return Ok("{\"message\": \"Ajout recette dans favoris |OK|\"}");
        }

        [HttpGet("{idUtilisateur}/recettesFavoris")]
        public IActionResult FindAllRecetteFavoris(string idUtilisateur)
        {
            return Ok(this._service.FindAllRecetteFavoris(idUtilisateur));
        }

        [HttpDelete("{idUtilisateur}/recettesFavoris/{idRecette}")]
        public IActionResult DeleteRecetteFavoris(string idUtilisateur, string idRecette)
        {
            this._service.DeleteRecetteFavoris(idUtilisateur, idRecette);
            return Ok("Recette favoris supprimé");
        }

        [HttpPost("login")]
        public IActionResult Login(Login user)
        {
            return Ok(this._service.Login(user.Username, user.Password));
        }

    }
}
