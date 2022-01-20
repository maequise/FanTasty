using FanTastyBack.Exceptions;
using FanTastyBack.Models;
using FanTastyBack.Services;
using Microsoft.AspNetCore.Mvc;

namespace FanTastyBack.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IngredientsController : ControllerBase
    {
        private readonly IngredientService _service;

        public IngredientsController(IngredientService service)
        {
            _service = service;
        }

        [HttpGet]
        public IActionResult FindAll()
        {
            try
            {
                return Ok(this._service.FindAll());
            }
            catch(NotFoundException e)
            {
                return NotFound(e.Message);
            }
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
        public IActionResult Create(Ingredient ingredient)
        {
            return Ok(this._service.Create(ingredient));
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            this._service.Delete(id);
            return Ok($"{id} deleted");
        }

        [HttpPut("{id}")]
        public IActionResult Update(string id, Ingredient ingredient)
        {
            return Ok(this._service.Update(id, ingredient));
        }
    }
}
