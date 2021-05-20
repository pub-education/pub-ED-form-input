using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Forms_and_Inputs.Models;

namespace Forms_and_Inputs.Controllers
{
    public class FeverCheckController : Controller
    {
        public IActionResult Calculate()
        {
            double x = Convert.ToDouble(Request.Query["temp"]);
            string scale = Request.Query["scale"];
            Console.WriteLine("scale: " + scale + ", tmp: " + x.ToString());
            return Content(FeverModel.FeverCheck(x, scale));
        }
    }

    public class Testing : IActionResult
    {
        Task IActionResult.ExecuteResultAsync(ActionContext context)
        {
            throw new NotImplementedException();
        }
    }
}
