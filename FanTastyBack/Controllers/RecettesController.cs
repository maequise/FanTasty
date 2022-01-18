using Microsoft.AspNetCore.Mvc;

namespace FanTastyBack.Controllers
{
    public class RecettesController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
