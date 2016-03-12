using System.Web.Mvc;

namespace Templates.Controllers
{
    public class TodoController : Controller
    {
        public ActionResult TodoList()
        {
            return View();
        }

        public ActionResult TodoEditModal()
        {
            return View();
        }
    }
}