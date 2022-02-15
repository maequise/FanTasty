using FanTastyBack.Exceptions;
using FanTastyBack.Models;
using FanTastyBack.Services;
using Microsoft.AspNetCore.Mvc;

namespace FanTastyBack.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecettesController : ControllerBase
    {
        private readonly RecetteService _service;

        public RecettesController(RecetteService service)
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
            try
            {
                return Ok(this._service.FindById(id));
            }
            catch (NotFoundException e)
            {
                return NotFound(e.Message);
            }
        }

        [HttpGet("name/{nom}")]
        public IActionResult FindByName(string nom)
        {
            try
            {
                return Ok(this._service.FindByName(nom));
            }
            catch (NotFoundException e)
            {
                return NotFound(e.Message);
            }
        }

        [HttpPost]
        public IActionResult Create(Recette recette)
        {
            return Ok(this._service.Create(recette));
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            this._service.Delete(id);
            return Ok($"{id} deleted");
        }

        [HttpPut("{id}")]
        public IActionResult Update(string id, Recette recette)
        {
            return Ok(this._service.Update(id, recette));
        }
    }
}
