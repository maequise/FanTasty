﻿using FanTastyBack.Exceptions;
using FanTastyBack.Models;
using FanTastyBack.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Text.Json;

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
            try
            {
                return Ok(this._service.FindAll());
            }
            catch (NotFoundException e)
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

        [HttpGet("univers/{univers}")]
        public IActionResult FindByUnivers(string univers)
        {
            try
            {
                return Ok(this._service.FindByUnivers(univers));
            }
            catch(NotFoundException e)
            {
                return NotFound(e.Message);
            }
        }

        [HttpGet("auteur/{auteur}")]
        public IActionResult FindByAuteur(string auteur)
        {
            try
            {
                return Ok(this._service.FindByAuteur(auteur));
            }
            catch (NotFoundException e)
            {
                return NotFound(e.Message);
            }
        }

        [HttpGet("tag/{tagString}")]
        public IActionResult FindByTag(Tag tagString)
        {
            //Tag tag = JsonSerializer.Deserialize<Tag>(tagString);

            try
            {
                return Ok(this._service.FindByTag(tagString));
            }
            catch (NotFoundException e)
            {
                //return NotFound(e.Message);
                return Ok(new List<Recette>());
            }
        }
        
        /**
         * @TMER : Test 
         * */
        [HttpGet("tag-search")]
        public IActionResult FindByTagSearch(string tagString)
        {
            Tag tag = JsonSerializer.Deserialize<Tag>(tagString);

            try
            {
                return Ok(this._service.FindByTag(tag));
            }
            catch (NotFoundException e)
            {
                //return NotFound(e.Message);
                return Ok(new List<Recette>());
            }
        }

        [HttpGet("ingredient/{ingredient}")]
        public IActionResult FindByIngredient(string ingredient)
        {
            try
            {
                return Ok(this._service.FindByIngredient(ingredient));
            }
            catch (NotFoundException e)
            {
                return NotFound(e.Message);
            }
        }

        [HttpGet("ustensile/{ustensile}")]
        public IActionResult FindByUstensile(string ustensile)
        {
            try
            {
                return Ok(this._service.FindByUstensile(ustensile));
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
